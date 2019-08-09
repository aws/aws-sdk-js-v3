import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterPatchBaselineForPatchGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BaselineId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PatchGroup: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
