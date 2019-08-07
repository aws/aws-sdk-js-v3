import { _FunctionCode } from "./_FunctionCode";
import { _VpcConfig } from "./_VpcConfig";
import { _DeadLetterConfig } from "./_DeadLetterConfig";
import { _Environment } from "./_Environment";
import { _TracingConfig } from "./_TracingConfig";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFunctionInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName", "Runtime", "Role", "Handler", "Code"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
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
    Code: {
      shape: _FunctionCode
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
    Publish: {
      shape: {
        type: "boolean"
      }
    },
    VpcConfig: {
      shape: _VpcConfig
    },
    DeadLetterConfig: {
      shape: _DeadLetterConfig
    },
    Environment: {
      shape: _Environment
    },
    KMSKeyArn: {
      shape: {
        type: "string"
      }
    },
    TracingConfig: {
      shape: _TracingConfig
    },
    Tags: {
      shape: _Tags
    }
  }
};
