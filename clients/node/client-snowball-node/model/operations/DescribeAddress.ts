import { DescribeAddressInput } from "../shapes/DescribeAddressInput";
import { DescribeAddressOutput } from "../shapes/DescribeAddressOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAddressInput
  },
  output: {
    shape: DescribeAddressOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    }
  ]
};
