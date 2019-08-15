import { DeleteDatasetInput } from "../shapes/DeleteDatasetInput";
import { DeleteDatasetOutput } from "../shapes/DeleteDatasetOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDataset",
  http: {
    method: "DELETE",
    requestUri:
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}"
  },
  input: {
    shape: DeleteDatasetInput
  },
  output: {
    shape: DeleteDatasetOutput
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
    },
    {
      shape: ResourceConflictException
    }
  ]
};
