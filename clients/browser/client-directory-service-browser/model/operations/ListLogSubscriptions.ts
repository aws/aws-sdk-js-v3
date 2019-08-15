import { ListLogSubscriptionsInput } from "../shapes/ListLogSubscriptionsInput";
import { ListLogSubscriptionsOutput } from "../shapes/ListLogSubscriptionsOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
