import { DescribeUserInput } from "../shapes/DescribeUserInput";
import { DescribeUserOutput } from "../shapes/DescribeUserOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUser",
  http: {
    method: "GET",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}"
  },
  input: {
    shape: DescribeUserInput
  },
  output: {
    shape: DescribeUserOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
