import { ListLogSubscriptionsInput } from "./ListLogSubscriptionsInput";
import { ListLogSubscriptionsOutput } from "./ListLogSubscriptionsOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListLogSubscriptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLogSubscriptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLogSubscriptionsInput
  },
  output: {
    shape: ListLogSubscriptionsOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
