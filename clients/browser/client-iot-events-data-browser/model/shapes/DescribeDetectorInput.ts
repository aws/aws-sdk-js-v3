import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDetectorInput: _Structure_ = {
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
    },
    keyValue: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "keyValue"
    }
  }
};
