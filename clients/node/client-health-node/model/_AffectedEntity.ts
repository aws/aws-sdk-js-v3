import { _tagSet } from "./_tagSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AffectedEntity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    entityArn: {
      shape: {
        type: "string"
      }
    },
    eventArn: {
      shape: {
        type: "string"
      }
    },
    entityValue: {
      shape: {
        type: "string"
      }
    },
    entityUrl: {
      shape: {
        type: "string"
      }
    },
    awsAccountId: {
      shape: {
        type: "string"
      }
    },
    lastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    statusCode: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _tagSet
    }
  }
};
