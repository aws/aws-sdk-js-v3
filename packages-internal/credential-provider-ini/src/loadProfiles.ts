import type { SourceProfileInit } from "@smithy/core/config";
import { loadSharedConfigFiles } from "@smithy/core/config";
import type { ParsedIniData } from "@smithy/types";

import { loadEmptyDaemonCredentialProfiles } from "./findEmptyDaemonCredentialProfiles";

const CREDENTIAL_DAEMON_KEY = "credential_daemon";

const getOwnSection = (data: ParsedIniData, name: string) => (Object.hasOwn(data, name) ? data[name] : undefined);

/**
 * Merges the shared config and credentials files like parseKnownFiles, except that
 * credential_daemon is taken from the config file only.
 *
 * An empty `credential_daemon =` line in the config file gives "", because the ini parser drops it.
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
    const fromConfig = getOwnSection(configFile, name)?.[CREDENTIAL_DAEMON_KEY];
    if (fromConfig === undefined) {
      delete section[CREDENTIAL_DAEMON_KEY];
    } else {
      section[CREDENTIAL_DAEMON_KEY] = fromConfig;
    }
  }

  for (const name of await loadEmptyDaemonCredentialProfiles(init)) {
    if (getOwnSection(configFile, name)?.[CREDENTIAL_DAEMON_KEY] === undefined) {
      profiles[name] = { ...getOwnSection(profiles, name), [CREDENTIAL_DAEMON_KEY]: "" };
    }
  }

  return profiles;
};
