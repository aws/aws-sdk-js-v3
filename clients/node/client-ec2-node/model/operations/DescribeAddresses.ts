import { DescribeAddressesInput } from "../shapes/DescribeAddressesInput";
import { DescribeAddressesOutput } from "../shapes/DescribeAddressesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAddresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAddresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAddressesInput
  },
  output: {
    shape: DescribeAddressesOutput
  },
  errors: []
};
