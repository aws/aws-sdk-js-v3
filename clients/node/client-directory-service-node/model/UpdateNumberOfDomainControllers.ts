import { UpdateNumberOfDomainControllersInput } from "./UpdateNumberOfDomainControllersInput";
import { UpdateNumberOfDomainControllersOutput } from "./UpdateNumberOfDomainControllersOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { DomainControllerLimitExceededException } from "./DomainControllerLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
