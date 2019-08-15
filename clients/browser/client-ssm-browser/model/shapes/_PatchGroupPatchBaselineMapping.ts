import { _PatchBaselineIdentity } from "./_PatchBaselineIdentity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchGroupPatchBaselineMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PatchGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BaselineIdentity: {
      shape: _PatchBaselineIdentity
    }
  }
};
