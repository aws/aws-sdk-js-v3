import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFpgaImageInput: _Structure_ = {
  type: "structure",
  required: ["FpgaImageId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    FpgaImageId: {
      shape: {
        type: "string"
      }
    }
  }
};
