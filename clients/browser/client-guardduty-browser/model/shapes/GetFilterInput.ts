import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFilterInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "FilterName"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    FilterName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "filterName"
    }
  }
};
