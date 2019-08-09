import { _ResourceShareArnList } from "./_ResourceShareArnList";
import { _TagFilters } from "./_TagFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceSharesInput: _Structure_ = {
  type: "structure",
  required: ["resourceOwner"],
  members: {
    resourceShareArns: {
      shape: _ResourceShareArnList
    },
    resourceShareStatus: {
      shape: {
        type: "string"
      }
    },
    resourceOwner: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    tagFilters: {
      shape: _TagFilters
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
