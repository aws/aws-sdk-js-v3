import { DescribeProtectionInput } from "./DescribeProtectionInput";
import { DescribeProtectionOutput } from "./DescribeProtectionOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
