import { UnsubscribeFromDatasetInput } from "./UnsubscribeFromDatasetInput";
import { UnsubscribeFromDatasetOutput } from "./UnsubscribeFromDatasetOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidConfigurationException } from "./InvalidConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
