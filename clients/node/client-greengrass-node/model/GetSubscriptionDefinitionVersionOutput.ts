import { _SubscriptionDefinitionVersion } from "./_SubscriptionDefinitionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSubscriptionDefinitionVersionOutput: _Structure_ = {
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
      shape: _SubscriptionDefinitionVersion
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
