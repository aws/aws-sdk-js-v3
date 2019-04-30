import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBucketInventoryConfigurationsInput: _Structure_ = {
  type: "structure",
  required: ["Bucket"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    ContinuationToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "continuation-token"
    }
  }
};
