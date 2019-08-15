import { _DelegationSet } from "./_DelegationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReusableDelegationSetOutput: _Structure_ = {
  type: "structure",
  required: ["DelegationSet"],
  members: {
    DelegationSet: {
      shape: _DelegationSet
    }
  }
};
