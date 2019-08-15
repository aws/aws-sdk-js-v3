import { _ResourceArnList } from "./_ResourceArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcePoliciesInput: _Structure_ = {
  type: "structure",
  required: ["resourceArns"],
  members: {
    resourceArns: {
      shape: _ResourceArnList
    },
    principal: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
