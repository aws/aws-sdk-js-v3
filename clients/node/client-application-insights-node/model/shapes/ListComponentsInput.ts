import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListComponentsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceGroupName"],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
