import { _ResourceDefinitionVersion } from "./_ResourceDefinitionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceDefinitionVersionOutput: _Structure_ = {
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
      shape: _ResourceDefinitionVersion
    },
    Id: {
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
