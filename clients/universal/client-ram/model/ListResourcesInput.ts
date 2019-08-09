import { _ResourceArnList } from "./_ResourceArnList";
import { _ResourceShareArnList } from "./_ResourceShareArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourcesInput: _Structure_ = {
  type: "structure",
  required: ["resourceOwner"],
  members: {
    resourceOwner: {
      shape: {
        type: "string"
      }
    },
    principal: {
      shape: {
        type: "string"
      }
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    resourceArns: {
      shape: _ResourceArnList
    },
    resourceShareArns: {
      shape: _ResourceShareArnList
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
