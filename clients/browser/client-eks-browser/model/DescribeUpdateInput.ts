import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUpdateInput: _Structure_ = {
  type: "structure",
  required: ["name", "updateId"],
  members: {
    name: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "name"
    },
    updateId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "updateId"
    }
  }
};
