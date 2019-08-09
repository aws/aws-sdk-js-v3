import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName", "AwsAccountId", "Namespace"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "GroupName"
    },
    AwsAccountId: {
      shape: {
        type: "string",
        min: 12
      },
      location: "uri",
      locationName: "AwsAccountId"
    },
    Namespace: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Namespace"
    }
  }
};
