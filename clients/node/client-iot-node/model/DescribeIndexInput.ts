import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIndexInput: _Structure_ = {
  type: "structure",
  required: ["indexName"],
  members: {
    indexName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "indexName"
    }
  }
};
