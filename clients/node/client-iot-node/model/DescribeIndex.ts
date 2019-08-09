import { DescribeIndexInput } from "./DescribeIndexInput";
import { DescribeIndexOutput } from "./DescribeIndexOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIndex",
  http: {
    method: "GET",
    requestUri: "/indices/{indexName}"
  },
  input: {
    shape: DescribeIndexInput
  },
  output: {
    shape: DescribeIndexOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
