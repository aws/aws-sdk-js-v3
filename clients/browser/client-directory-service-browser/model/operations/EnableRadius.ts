import { EnableRadiusInput } from "../shapes/EnableRadiusInput";
import { EnableRadiusOutput } from "../shapes/EnableRadiusOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableRadius: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableRadius",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableRadiusInput
  },
  output: {
    shape: EnableRadiusOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
