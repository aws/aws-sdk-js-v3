import { _ObjectIdentifierList } from "./_ObjectIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListObjectPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachedPolicyIds: {
      shape: _ObjectIdentifierList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
