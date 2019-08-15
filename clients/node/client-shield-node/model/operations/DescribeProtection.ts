import { DescribeProtectionInput } from "../shapes/DescribeProtectionInput";
import { DescribeProtectionOutput } from "../shapes/DescribeProtectionOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProtection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProtection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProtectionInput
  },
  output: {
    shape: DescribeProtectionOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
