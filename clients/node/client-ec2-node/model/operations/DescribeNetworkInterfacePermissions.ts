import { DescribeNetworkInterfacePermissionsInput } from "../shapes/DescribeNetworkInterfacePermissionsInput";
import { DescribeNetworkInterfacePermissionsOutput } from "../shapes/DescribeNetworkInterfacePermissionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNetworkInterfacePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNetworkInterfacePermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNetworkInterfacePermissionsInput
  },
  output: {
    shape: DescribeNetworkInterfacePermissionsOutput
  },
  errors: []
};
