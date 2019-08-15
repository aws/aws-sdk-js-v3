import { _PrincipalArnOrIdList } from "./_PrincipalArnOrIdList";
import { _ResourceShareArnList } from "./_ResourceShareArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPrincipalsInput: _Structure_ = {
  type: "structure",
  required: ["resourceOwner"],
  members: {
    resourceOwner: {
      shape: {
        type: "string"
      }
    },
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    principals: {
      shape: _PrincipalArnOrIdList
    },
    resourceType: {
      shape: {
        type: "string"
      }
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
