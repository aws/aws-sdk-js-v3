import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBucketRequestPaymentInput: _Structure_ = {
  type: "structure",
  required: ["Bucket"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    }
  }
};
