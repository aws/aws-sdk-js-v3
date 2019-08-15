import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageId: {
      shape: {
        type: "string"
      },
      locationName: "imageId"
    }
  }
};
