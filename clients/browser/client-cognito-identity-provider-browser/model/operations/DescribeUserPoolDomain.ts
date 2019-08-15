import { DescribeUserPoolDomainInput } from "../shapes/DescribeUserPoolDomainInput";
import { DescribeUserPoolDomainOutput } from "../shapes/DescribeUserPoolDomainOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUserPoolDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserPoolDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserPoolDomainInput
  },
  output: {
    shape: DescribeUserPoolDomainOutput
  },
  errors: [
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
