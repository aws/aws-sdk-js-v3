import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyFpgaImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FpgaImageId: {
      shape: {
        type: "string"
      },
      locationName: "fpgaImageId"
    }
  }
};
