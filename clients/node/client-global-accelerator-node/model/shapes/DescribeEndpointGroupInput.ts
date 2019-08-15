import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointGroupInput: _Structure_ = {
  type: "structure",
  required: ["EndpointGroupArn"],
  members: {
    EndpointGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
