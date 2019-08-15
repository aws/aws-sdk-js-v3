import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssociatedStacksInput: _Structure_ = {
  type: "structure",
  required: ["FleetName"],
  members: {
    FleetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
