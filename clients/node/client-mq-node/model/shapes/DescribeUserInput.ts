import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserInput: _Structure_ = {
  type: "structure",
  required: ["Username", "BrokerId"],
  members: {
    BrokerId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "broker-id"
    },
    Username: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "username"
    }
  }
};
