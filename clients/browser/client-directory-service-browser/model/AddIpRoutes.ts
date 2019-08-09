import { AddIpRoutesInput } from "./AddIpRoutesInput";
import { AddIpRoutesOutput } from "./AddIpRoutesOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { InvalidParameterException } from "./InvalidParameterException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { IpRouteLimitExceededException } from "./IpRouteLimitExceededException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddIpRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddIpRoutes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddIpRoutesInput
  },
  output: {
    shape: AddIpRoutesOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: IpRouteLimitExceededException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
