import { _PatchBaselineIdentityList } from "./_PatchBaselineIdentityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePatchBaselinesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BaselineIdentities: {
      shape: _PatchBaselineIdentityList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
