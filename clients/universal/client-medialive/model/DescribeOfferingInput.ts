import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOfferingInput: _Structure_ = {
  type: "structure",
  required: ["OfferingId"],
  members: {
    OfferingId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "offeringId"
    }
  }
};
