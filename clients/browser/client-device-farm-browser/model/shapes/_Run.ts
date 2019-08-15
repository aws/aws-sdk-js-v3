import { _Counters } from "./_Counters";
import { _DeviceMinutes } from "./_DeviceMinutes";
import { _NetworkProfile } from "./_NetworkProfile";
import { _Radios } from "./_Radios";
import { _Location } from "./_Location";
import { _CustomerArtifactPaths } from "./_CustomerArtifactPaths";
import { _DeviceSelectionResult } from "./_DeviceSelectionResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Run: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    platform: {
      shape: {
        type: "string"
      }
    },
    created: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    result: {
      shape: {
        type: "string"
      }
    },
    started: {
      shape: {
        type: "timestamp"
      }
    },
    stopped: {
      shape: {
        type: "timestamp"
      }
    },
    counters: {
      shape: _Counters
    },
    message: {
      shape: {
        type: "string"
      }
    },
    totalJobs: {
      shape: {
        type: "integer"
      }
    },
    completedJobs: {
      shape: {
        type: "integer"
      }
    },
    billingMethod: {
      shape: {
        type: "string"
      }
    },
    deviceMinutes: {
      shape: _DeviceMinutes
    },
    networkProfile: {
      shape: _NetworkProfile
    },
    parsingResultUrl: {
      shape: {
        type: "string"
      }
    },
    resultCode: {
      shape: {
        type: "string"
      }
    },
    seed: {
      shape: {
        type: "integer"
      }
    },
    appUpload: {
      shape: {
        type: "string",
        min: 32
      }
    },
    eventCount: {
      shape: {
        type: "integer"
      }
    },
    jobTimeoutMinutes: {
      shape: {
        type: "integer"
      }
    },
    devicePoolArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    locale: {
      shape: {
        type: "string"
      }
    },
    radios: {
      shape: _Radios
    },
    location: {
      shape: _Location
    },
    customerArtifactPaths: {
      shape: _CustomerArtifactPaths
    },
    webUrl: {
      shape: {
        type: "string"
      }
    },
    skipAppResign: {
      shape: {
        type: "boolean"
      }
    },
    testSpecArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    deviceSelectionResult: {
      shape: _DeviceSelectionResult
    }
  }
};
