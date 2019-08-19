import { _Patch } from "./_Patch";
import { _PatchStatus } from "./_PatchStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EffectivePatch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Patch: {
      shape: _Patch
    },
    PatchStatus: {
      shape: _PatchStatus
    }
  }
};
