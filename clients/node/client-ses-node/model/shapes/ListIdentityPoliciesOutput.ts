import { _PolicyNameList } from "./_PolicyNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentityPoliciesOutput: _Structure_ = {
  type: "structure",
  required: ["PolicyNames"],
  members: {
    PolicyNames: {
      shape: _PolicyNameList
    }
  }
};
