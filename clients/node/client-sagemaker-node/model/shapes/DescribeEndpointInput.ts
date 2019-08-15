import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointName"],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    }
  }
};
