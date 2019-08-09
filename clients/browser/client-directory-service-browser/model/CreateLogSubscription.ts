import { CreateLogSubscriptionInput } from "./CreateLogSubscriptionInput";
import { CreateLogSubscriptionOutput } from "./CreateLogSubscriptionOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
