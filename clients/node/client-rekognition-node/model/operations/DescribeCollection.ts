import { DescribeCollectionInput } from "../shapes/DescribeCollectionInput";
import { DescribeCollectionOutput } from "../shapes/DescribeCollectionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCollection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCollection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCollectionInput
  },
  output: {
    shape: DescribeCollectionOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
