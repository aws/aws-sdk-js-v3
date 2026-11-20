import type { SourceProfileInit } from "@smithy/core/config";
import { getHomeDir, readFile } from "@smithy/core/config";
import { join } from "node:path";

const CREDENTIAL_DAEMON_KEY = "credential_daemon";
const PROFILE_SECTION = /^profile\s(["'])?([\w-@+.%:/]+)\1$/;
// the ini parser rejects these section names, so the config file is not used.
const BLOCKED_SECTION_NAMES = ["__proto__", "profile __proto__"];

/**
 * Returns the profiles of the config file text that have a `credential_daemon` line with an empty value,
 * following the section, comment and subsection rules of the shared ini file parser, which drops such
 * lines.
 * @internal
 */
export const findEmptyDaemonCredentialProfiles = (text: string): Set<string> => {
  const found = new Set<string>();
  let profile: string | undefined;
  let inSubsection = false;
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.split(/(^|\s)[;#]/)[0].trim();
    if (trimmed[0] === "[" && trimmed[trimmed.length - 1] === "]") {
      const sectionName = trimmed.substring(1, trimmed.length - 1);
      if (BLOCKED_SECTION_NAMES.includes(sectionName)) {
        return new Set();
      }
      profile = sectionName === "default" ? "default" : PROFILE_SECTION.exec(sectionName)?.[2];
      inSubsection = false;
      continue;
    }
    const equalsIndex = trimmed.indexOf("=");
    if (profile === undefined || equalsIndex <= 0) {
      continue;
    }
    const key = trimmed.substring(0, equalsIndex).trim();
    const value = trimmed.substring(equalsIndex + 1).trim();
    const indented = line.trimStart() !== line;
    if (value === "") {
      // The parser starts a subsection at an empty value, and an indented line after it belongs to that
      // subsection. Any other line is a setting of the profile, indented or not.
      if (key === CREDENTIAL_DAEMON_KEY && !(indented && inSubsection)) {
        found.add(profile);
      }
      inSubsection = true;
    } else if (!indented) {
      inSubsection = false;
    }
  }
  return found;
};

/**
 * Returns the profiles of the shared config file that have an empty `credential_daemon`.
 * @internal
 */
export const loadEmptyDaemonCredentialProfiles = async (init: SourceProfileInit = {}): Promise<Set<string>> => {
  try {
    const homeDir = getHomeDir();
    let configFilepath = init.configFilepath ?? (process.env.AWS_CONFIG_FILE || join(homeDir, ".aws", "config"));
    if (configFilepath.startsWith("~/")) {
      configFilepath = join(homeDir, configFilepath.slice(2));
    }
    // The same cached text loadSharedConfigFiles parsed, unless ignoreCache is set.
    const text = await readFile(configFilepath, { ignoreCache: init.ignoreCache });
    if (typeof text !== "string" || !text.includes(CREDENTIAL_DAEMON_KEY)) {
      return new Set();
    }
    return findEmptyDaemonCredentialProfiles(text);
  } catch {
    return new Set();
  }
};
