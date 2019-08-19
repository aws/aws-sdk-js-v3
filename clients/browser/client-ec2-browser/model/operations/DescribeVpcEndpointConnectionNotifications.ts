import { DescribeVpcEndpointConnectionNotificationsInput } from "../shapes/DescribeVpcEndpointConnectionNotificationsInput";
import { DescribeVpcEndpointConnectionNotificationsOutput } from "../shapes/DescribeVpcEndpointConnectionNotificationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpcEndpointConnectionNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcEndpointConnectionNotifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcEndpointConnectionNotificationsInput
  },
  output: {
    shape: DescribeVpcEndpointConnectionNotificationsOutput
  },
  errors: []
};
