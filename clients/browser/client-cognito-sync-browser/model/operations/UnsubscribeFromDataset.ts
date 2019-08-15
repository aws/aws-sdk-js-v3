import { UnsubscribeFromDatasetInput } from "../shapes/UnsubscribeFromDatasetInput";
import { UnsubscribeFromDatasetOutput } from "../shapes/UnsubscribeFromDatasetOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidConfigurationException } from "../shapes/InvalidConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnsubscribeFromDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnsubscribeFromDataset",
  http: {
    method: "DELETE",
    requestUri:
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}"
  },
  input: {
    shape: UnsubscribeFromDatasetInput
  },
  output: {
    shape: UnsubscribeFromDatasetOutput
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
      shape: InvalidConfigurationException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
