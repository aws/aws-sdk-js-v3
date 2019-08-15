import { _BuildPhases } from "./_BuildPhases";
import { _ProjectSource } from "./_ProjectSource";
import { _ProjectSources } from "./_ProjectSources";
import { _ProjectSecondarySourceVersions } from "./_ProjectSecondarySourceVersions";
import { _BuildArtifacts } from "./_BuildArtifacts";
import { _BuildArtifactsList } from "./_BuildArtifactsList";
import { _ProjectCache } from "./_ProjectCache";
import { _ProjectEnvironment } from "./_ProjectEnvironment";
import { _LogsLocation } from "./_LogsLocation";
import { _VpcConfig } from "./_VpcConfig";
import { _NetworkInterface } from "./_NetworkInterface";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Build: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    currentPhase: {
      shape: {
        type: "string"
      }
    },
    buildStatus: {
      shape: {
        type: "string"
      }
    },
    sourceVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resolvedSourceVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    projectName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    phases: {
      shape: _BuildPhases
    },
    source: {
      shape: _ProjectSource
    },
    secondarySources: {
      shape: _ProjectSources
    },
    secondarySourceVersions: {
      shape: _ProjectSecondarySourceVersions
    },
    artifacts: {
      shape: _BuildArtifacts
    },
    secondaryArtifacts: {
      shape: _BuildArtifactsList
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
    logs: {
      shape: _LogsLocation
    },
    timeoutInMinutes: {
      shape: {
        type: "integer"
      }
    },
    queuedTimeoutInMinutes: {
      shape: {
        type: "integer"
      }
    },
    buildComplete: {
      shape: {
        type: "boolean"
      }
    },
    initiator: {
      shape: {
        type: "string"
      }
    },
    vpcConfig: {
      shape: _VpcConfig
    },
    networkInterface: {
      shape: _NetworkInterface
    },
    encryptionKey: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
