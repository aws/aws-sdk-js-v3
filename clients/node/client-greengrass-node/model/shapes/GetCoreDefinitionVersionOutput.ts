import { _CoreDefinitionVersion } from "./_CoreDefinitionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCoreDefinitionVersionOutput: _Structure_ = {
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
      shape: _CoreDefinitionVersion
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
