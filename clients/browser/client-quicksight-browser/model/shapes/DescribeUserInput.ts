import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "AwsAccountId", "Namespace"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "UserName"
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
