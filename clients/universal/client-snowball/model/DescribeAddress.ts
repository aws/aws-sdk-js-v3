import { DescribeAddressInput } from "./DescribeAddressInput";
import { DescribeAddressOutput } from "./DescribeAddressOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
