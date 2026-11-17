import type { SourceProfileInit } from "@smithy/core/config";
import { loadSharedConfigFiles } from "@smithy/core/config";
import type { ParsedIniData } from "@smithy/types";

const DAEMON_CREDENTIAL = "daemon_credential";

const getOwnSection = (data: ParsedIniData, name: string) => (Object.hasOwn(data, name) ? data[name] : undefined);

/**
 * Merges the shared config and credentials files like parseKnownFiles, except that
 * daemon_credential is taken from the config file only.
 *
 * An empty `daemon_credential =` line in the config file gives "", because the ini parser drops it.
 * @internal
 */
export const loadProfiles = async (init: SourceProfileInit = {}): Promise<ParsedIniData> => {
  const { configFile = {}, credentialsFile = {} } = (await loadSharedConfigFiles(init)) ?? {};

  const profiles: ParsedIniData = {};
  for (const file of [configFile, credentialsFile]) {
    for (const [name, section] of Object.entries(file)) {
      profiles[name] = { ...getOwnSection(profiles, name), ...section };
    }
  }

  for (const [name, section] of Object.entries(profiles)) {
    const fromConfig = getOwnSection(configFile, name)?.[DAEMON_CREDENTIAL];
    if (fromConfig === undefined) {
      delete section[DAEMON_CREDENTIAL];
    } else {
      section[DAEMON_CREDENTIAL] = fromConfig;
    }
  }

  const { loadEmptyDaemonCredentialProfiles } = await import("@aws-sdk/credential-provider-credential-daemon");
  for (const name of await loadEmptyDaemonCredentialProfiles(init)) {
    if (getOwnSection(configFile, name)?.[DAEMON_CREDENTIAL] === undefined) {
      profiles[name] = { ...getOwnSection(profiles, name), [DAEMON_CREDENTIAL]: "" };
    }
  }

  return profiles;
};
