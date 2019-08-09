import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAvailabilityOptionsInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Deployed: {
      shape: {
        type: "boolean"
      }
    }
  }
};
