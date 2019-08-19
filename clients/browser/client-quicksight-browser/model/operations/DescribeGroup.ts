import { DescribeGroupInput } from "../shapes/DescribeGroupInput";
import { DescribeGroupOutput } from "../shapes/DescribeGroupOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGroup",
  http: {
    method: "GET",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}"
  },
  input: {
    shape: DescribeGroupInput
  },
  output: {
    shape: DescribeGroupOutput
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
      shape: PreconditionNotMetException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
