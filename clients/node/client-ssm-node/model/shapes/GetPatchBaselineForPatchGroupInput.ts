import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPatchBaselineForPatchGroupInput: _Structure_ = {
  type: "structure",
  required: ["PatchGroup"],
  members: {
    PatchGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperatingSystem: {
      shape: {
        type: "string"
      }
    }
  }
};
