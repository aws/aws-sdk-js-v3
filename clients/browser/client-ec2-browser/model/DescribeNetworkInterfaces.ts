import { DescribeNetworkInterfacesInput } from "./DescribeNetworkInterfacesInput";
import { DescribeNetworkInterfacesOutput } from "./DescribeNetworkInterfacesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeNetworkInterfaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNetworkInterfaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNetworkInterfacesInput
  },
  output: {
    shape: DescribeNetworkInterfacesOutput
  },
  errors: []
};
