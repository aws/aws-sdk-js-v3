import { SubscribeToDatasetInput } from "./SubscribeToDatasetInput";
import { SubscribeToDatasetOutput } from "./SubscribeToDatasetOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidConfigurationException } from "./InvalidConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
