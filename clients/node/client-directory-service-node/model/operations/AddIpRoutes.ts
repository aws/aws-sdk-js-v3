import { AddIpRoutesInput } from "../shapes/AddIpRoutesInput";
import { AddIpRoutesOutput } from "../shapes/AddIpRoutesOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { IpRouteLimitExceededException } from "../shapes/IpRouteLimitExceededException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
