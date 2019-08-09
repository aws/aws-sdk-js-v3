import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDatasetInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId", "IdentityId", "DatasetName"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityPoolId"
    },
    IdentityId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityId"
    },
    DatasetName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "DatasetName"
    }
  }
};
