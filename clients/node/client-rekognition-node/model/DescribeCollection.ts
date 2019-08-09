import { DescribeCollectionInput } from "./DescribeCollectionInput";
import { DescribeCollectionOutput } from "./DescribeCollectionOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
