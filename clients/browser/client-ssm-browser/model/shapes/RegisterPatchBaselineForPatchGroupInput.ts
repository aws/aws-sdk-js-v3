import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterPatchBaselineForPatchGroupInput: _Structure_ = {
  type: "structure",
  required: ["BaselineId", "PatchGroup"],
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
