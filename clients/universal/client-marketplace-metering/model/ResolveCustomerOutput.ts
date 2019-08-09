import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResolveCustomerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomerIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProductCode: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
