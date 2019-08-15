import { _Policies } from "./_Policies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAttachedPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policies: {
      shape: _Policies
    },
    nextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
