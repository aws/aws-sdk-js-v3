import { RemoveIpRoutesInput } from "../shapes/RemoveIpRoutesInput";
import { RemoveIpRoutesOutput } from "../shapes/RemoveIpRoutesOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
