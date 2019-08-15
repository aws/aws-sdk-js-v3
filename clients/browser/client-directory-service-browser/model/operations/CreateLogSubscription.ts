import { CreateLogSubscriptionInput } from "../shapes/CreateLogSubscriptionInput";
import { CreateLogSubscriptionOutput } from "../shapes/CreateLogSubscriptionOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { InsufficientPermissionsException } from "../shapes/InsufficientPermissionsException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLogSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLogSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLogSubscriptionInput
  },
  output: {
    shape: CreateLogSubscriptionOutput
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: InsufficientPermissionsException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
