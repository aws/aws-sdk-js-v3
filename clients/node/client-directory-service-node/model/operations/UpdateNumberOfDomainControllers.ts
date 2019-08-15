import { UpdateNumberOfDomainControllersInput } from "../shapes/UpdateNumberOfDomainControllersInput";
import { UpdateNumberOfDomainControllersOutput } from "../shapes/UpdateNumberOfDomainControllersOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { DomainControllerLimitExceededException } from "../shapes/DomainControllerLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateNumberOfDomainControllers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNumberOfDomainControllers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNumberOfDomainControllersInput
  },
  output: {
    shape: UpdateNumberOfDomainControllersOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: DomainControllerLimitExceededException
    },
    {
      shape: InvalidParameterException
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
