import { DescribeUserPoolDomainInput } from "./DescribeUserPoolDomainInput";
import { DescribeUserPoolDomainOutput } from "./DescribeUserPoolDomainOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
