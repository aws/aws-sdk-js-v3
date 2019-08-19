import { _FunctionDefinitionVersion } from "./_FunctionDefinitionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFunctionDefinitionVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "string"
      }
    },
    Definition: {
      shape: _FunctionDefinitionVersion
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};
