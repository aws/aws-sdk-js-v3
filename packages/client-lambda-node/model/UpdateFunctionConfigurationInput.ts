import { _VpcConfig } from "./_VpcConfig";
import { _Environment } from "./_Environment";
import { _DeadLetterConfig } from "./_DeadLetterConfig";
import { _TracingConfig } from "./_TracingConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFunctionConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FunctionName"
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
    VpcConfig: {
      shape: _VpcConfig
    },
    Environment: {
      shape: _Environment
    },
    Runtime: {
      shape: {
        type: "string"
      }
    },
    DeadLetterConfig: {
      shape: _DeadLetterConfig
    },
    KMSKeyArn: {
      shape: {
        type: "string"
      }
    },
    TracingConfig: {
      shape: _TracingConfig
    },
    RevisionId: {
      shape: {
        type: "string"
      }
    }
  }
};
