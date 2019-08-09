import { RemoveIpRoutesInput } from "./RemoveIpRoutesInput";
import { RemoveIpRoutesOutput } from "./RemoveIpRoutesOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveIpRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveIpRoutes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveIpRoutesInput
  },
  output: {
    shape: RemoveIpRoutesOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
