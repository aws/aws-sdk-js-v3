import { _ProjectSource } from "./_ProjectSource";
import { _ProjectSources } from "./_ProjectSources";
import { _ProjectSecondarySourceVersions } from "./_ProjectSecondarySourceVersions";
import { _ProjectArtifacts } from "./_ProjectArtifacts";
import { _ProjectArtifactsList } from "./_ProjectArtifactsList";
import { _ProjectCache } from "./_ProjectCache";
import { _ProjectEnvironment } from "./_ProjectEnvironment";
import { _TagList } from "./_TagList";
import { _VpcConfig } from "./_VpcConfig";
import { _LogsConfig } from "./_LogsConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProjectInput: _Structure_ = {
  type: "structure",
  required: ["name", "source", "artifacts", "environment", "serviceRole"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 2
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    source: {
      shape: _ProjectSource
    },
    secondarySources: {
      shape: _ProjectSources
    },
    sourceVersion: {
      shape: {
        type: "string"
      }
    },
    secondarySourceVersions: {
      shape: _ProjectSecondarySourceVersions
    },
    artifacts: {
      shape: _ProjectArtifacts
    },
    secondaryArtifacts: {
      shape: _ProjectArtifactsList
    },
    cache: {
      shape: _ProjectCache
    },
    environment: {
      shape: _ProjectEnvironment
    },
    serviceRole: {
      shape: {
        type: "string",
        min: 1
      }
    },
    timeoutInMinutes: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    queuedTimeoutInMinutes: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    encryptionKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagList
    },
    vpcConfig: {
      shape: _VpcConfig
    },
    badgeEnabled: {
      shape: {
        type: "boolean"
      }
    },
    logsConfig: {
      shape: _LogsConfig
    }
  }
};
