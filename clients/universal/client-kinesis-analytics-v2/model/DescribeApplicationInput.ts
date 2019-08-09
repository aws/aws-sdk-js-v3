import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IncludeAdditionalDetails: {
      shape: {
        type: "boolean"
      }
    }
  }
};
