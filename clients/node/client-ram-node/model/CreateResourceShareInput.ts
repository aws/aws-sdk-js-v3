import { _ResourceArnList } from "./_ResourceArnList";
import { _PrincipalArnOrIdList } from "./_PrincipalArnOrIdList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceShareInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
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
    tags: {
      shape: _TagList
    },
    allowExternalPrincipals: {
      shape: {
        type: "boolean"
      }
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
