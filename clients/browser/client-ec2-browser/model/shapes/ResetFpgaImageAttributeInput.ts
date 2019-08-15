import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetFpgaImageAttributeInput: _Structure_ = {
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
    },
    Attribute: {
      shape: {
        type: "string"
      }
    }
  }
};
