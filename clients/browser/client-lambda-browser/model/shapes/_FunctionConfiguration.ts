import { _VpcConfigResponse } from "./_VpcConfigResponse";
import { _DeadLetterConfig } from "./_DeadLetterConfig";
import { _EnvironmentResponse } from "./_EnvironmentResponse";
import { _TracingConfigResponse } from "./_TracingConfigResponse";
import { _LayersReferenceList } from "./_LayersReferenceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FunctionArn: {
      shape: {
        type: "string"
      }
    },
    Runtime: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    Handler: {
      shape: {
        type: "string"
      }
    },
    CodeSize: {
      shape: {
        type: "integer"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Timeout: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MemorySize: {
      shape: {
        type: "integer",
        min: 128
      }
    },
    LastModified: {
      shape: {
        type: "string"
      }
    },
    CodeSha256: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VpcConfig: {
      shape: _VpcConfigResponse
    },
    DeadLetterConfig: {
      shape: _DeadLetterConfig
    },
    Environment: {
      shape: _EnvironmentResponse
    },
    KMSKeyArn: {
      shape: {
        type: "string"
      }
    },
    TracingConfig: {
      shape: _TracingConfigResponse
    },
    MasterArn: {
      shape: {
        type: "string"
      }
    },
    RevisionId: {
      shape: {
        type: "string"
      }
    },
    Layers: {
      shape: _LayersReferenceList
    }
  }
};
