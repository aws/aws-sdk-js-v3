import { DeleteLogSubscriptionInput } from "../shapes/DeleteLogSubscriptionInput";
import { DeleteLogSubscriptionOutput } from "../shapes/DeleteLogSubscriptionOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLogSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLogSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLogSubscriptionInput
  },
  output: {
    shape: DeleteLogSubscriptionOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
