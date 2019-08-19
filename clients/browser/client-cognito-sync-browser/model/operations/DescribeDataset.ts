import { DescribeDatasetInput } from "../shapes/DescribeDatasetInput";
import { DescribeDatasetOutput } from "../shapes/DescribeDatasetOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDataset",
  http: {
    method: "GET",
    requestUri:
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}"
  },
  input: {
    shape: DescribeDatasetInput
  },
  output: {
    shape: DescribeDatasetOutput
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
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
