import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConnectionsOnInterconnectInput: _Structure_ = {
  type: "structure",
  required: ["interconnectId"],
  members: {
    interconnectId: {
      shape: {
        type: "string"
      }
    }
  }
};
