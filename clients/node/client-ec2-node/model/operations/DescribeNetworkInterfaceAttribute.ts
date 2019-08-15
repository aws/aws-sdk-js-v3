import { DescribeNetworkInterfaceAttributeInput } from "../shapes/DescribeNetworkInterfaceAttributeInput";
import { DescribeNetworkInterfaceAttributeOutput } from "../shapes/DescribeNetworkInterfaceAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNetworkInterfaceAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNetworkInterfaceAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNetworkInterfaceAttributeInput
  },
  output: {
    shape: DescribeNetworkInterfaceAttributeOutput
  },
  errors: []
};
