import { _ResourceShareArnList } from "./_ResourceShareArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceShareAssociationsInput: _Structure_ = {
  type: "structure",
  required: ["associationType"],
  members: {
    associationType: {
      shape: {
        type: "string"
      }
    },
    resourceShareArns: {
      shape: _ResourceShareArnList
    },
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    principal: {
      shape: {
        type: "string"
      }
    },
    associationStatus: {
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
