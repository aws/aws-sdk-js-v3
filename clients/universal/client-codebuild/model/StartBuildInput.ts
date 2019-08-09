import { _ProjectSources } from "./_ProjectSources";
import { _ProjectSecondarySourceVersions } from "./_ProjectSecondarySourceVersions";
import { _ProjectArtifacts } from "./_ProjectArtifacts";
import { _ProjectArtifactsList } from "./_ProjectArtifactsList";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _SourceAuth } from "./_SourceAuth";
import { _GitSubmodulesConfig } from "./_GitSubmodulesConfig";
import { _ProjectCache } from "./_ProjectCache";
import { _LogsConfig } from "./_LogsConfig";
import { _RegistryCredential } from "./_RegistryCredential";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartBuildInput: _Structure_ = {
  type: "structure",
  required: ["projectName"],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    secondarySourcesOverride: {
      shape: _ProjectSources
    },
    secondarySourcesVersionOverride: {
      shape: _ProjectSecondarySourceVersions
    },
    sourceVersion: {
      shape: {
        type: "string"
      }
    },
    artifactsOverride: {
      shape: _ProjectArtifacts
    },
    secondaryArtifactsOverride: {
      shape: _ProjectArtifactsList
    },
    environmentVariablesOverride: {
      shape: _EnvironmentVariables
    },
    sourceTypeOverride: {
      shape: {
        type: "string"
      }
    },
    sourceLocationOverride: {
      shape: {
        type: "string"
      }
    },
    sourceAuthOverride: {
      shape: _SourceAuth
    },
    gitCloneDepthOverride: {
      shape: {
        type: "integer"
      }
    },
    gitSubmodulesConfigOverride: {
      shape: _GitSubmodulesConfig
    },
    buildspecOverride: {
      shape: {
        type: "string"
      }
    },
    insecureSslOverride: {
      shape: {
        type: "boolean"
      }
    },
    reportBuildStatusOverride: {
      shape: {
        type: "boolean"
      }
    },
    environmentTypeOverride: {
      shape: {
        type: "string"
      }
    },
    imageOverride: {
      shape: {
        type: "string",
        min: 1
      }
    },
    computeTypeOverride: {
      shape: {
        type: "string"
      }
    },
    certificateOverride: {
      shape: {
        type: "string"
      }
    },
    cacheOverride: {
      shape: _ProjectCache
    },
    serviceRoleOverride: {
      shape: {
        type: "string",
        min: 1
      }
    },
    privilegedModeOverride: {
      shape: {
        type: "boolean"
      }
    },
    timeoutInMinutesOverride: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    queuedTimeoutInMinutesOverride: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    idempotencyToken: {
      shape: {
        type: "string"
      }
    },
    logsConfigOverride: {
      shape: _LogsConfig
    },
    registryCredentialOverride: {
      shape: _RegistryCredential
    },
    imagePullCredentialsTypeOverride: {
      shape: {
        type: "string"
      }
    }
  }
};
