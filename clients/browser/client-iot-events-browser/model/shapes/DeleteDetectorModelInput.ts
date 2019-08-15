import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDetectorModelInput: _Structure_ = {
  type: "structure",
  required: ["detectorModelName"],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorModelName"
    }
  }
};
