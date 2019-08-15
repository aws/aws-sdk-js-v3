import { SubscribeToDatasetInput } from "../shapes/SubscribeToDatasetInput";
import { SubscribeToDatasetOutput } from "../shapes/SubscribeToDatasetOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidConfigurationException } from "../shapes/InvalidConfigurationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SubscribeToDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SubscribeToDataset",
  http: {
    method: "POST",
    requestUri:
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}"
  },
  input: {
    shape: SubscribeToDatasetInput
  },
  output: {
    shape: SubscribeToDatasetOutput
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
