import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPatchBaselineForPatchGroupOutput: _Structure_ = {
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
    },
    OperatingSystem: {
      shape: {
        type: "string"
      }
    }
  }
};
