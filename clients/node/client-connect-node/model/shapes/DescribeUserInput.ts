import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserInput: _Structure_ = {
  type: "structure",
  required: ["UserId", "InstanceId"],
  members: {
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "UserId"
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    }
  }
};
