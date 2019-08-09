import { ListIpRoutesInput } from "./ListIpRoutesInput";
import { ListIpRoutesOutput } from "./ListIpRoutesOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
