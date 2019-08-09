import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    functionName: {
      shape: {
        type: "string"
      }
    },
    functionAlias: {
      shape: {
        type: "string"
      }
    },
    currentVersion: {
      shape: {
        type: "string"
      }
    },
    targetVersion: {
      shape: {
        type: "string"
      }
    },
    targetVersionWeight: {
      shape: {
        type: "float"
      }
    }
  }
};
