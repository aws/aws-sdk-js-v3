import { DeleteLogSubscriptionInput } from "./DeleteLogSubscriptionInput";
import { DeleteLogSubscriptionOutput } from "./DeleteLogSubscriptionOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
