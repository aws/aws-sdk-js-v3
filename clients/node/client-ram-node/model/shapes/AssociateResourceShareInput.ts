import { _ResourceArnList } from "./_ResourceArnList";
import { _PrincipalArnOrIdList } from "./_PrincipalArnOrIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateResourceShareInput: _Structure_ = {
  type: "structure",
  required: ["resourceShareArn"],
  members: {
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    resourceArns: {
      shape: _ResourceArnList
    },
    principals: {
      shape: _PrincipalArnOrIdList
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
