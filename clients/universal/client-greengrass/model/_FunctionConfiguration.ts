import { _FunctionConfigurationEnvironment } from "./_FunctionConfigurationEnvironment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EncodingType: {
      shape: {
        type: "string"
      }
    },
    Environment: {
      shape: _FunctionConfigurationEnvironment
    },
    ExecArgs: {
      shape: {
        type: "string"
      }
    },
    Executable: {
      shape: {
        type: "string"
      }
    },
    MemorySize: {
      shape: {
        type: "integer"
      }
    },
    Pinned: {
      shape: {
        type: "boolean"
      }
    },
    Timeout: {
      shape: {
        type: "integer"
      }
    }
  }
};
