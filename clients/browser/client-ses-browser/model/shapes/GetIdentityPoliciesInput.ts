import { _PolicyNameList } from "./_PolicyNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["Identity", "PolicyNames"],
  members: {
    Identity: {
      shape: {
        type: "string"
      }
    },
    PolicyNames: {
      shape: _PolicyNameList
    }
  }
};
