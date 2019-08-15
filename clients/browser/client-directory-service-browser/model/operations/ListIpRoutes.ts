import { ListIpRoutesInput } from "../shapes/ListIpRoutesInput";
import { ListIpRoutesOutput } from "../shapes/ListIpRoutesOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIpRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIpRoutes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListIpRoutesInput
  },
  output: {
    shape: ListIpRoutesOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
