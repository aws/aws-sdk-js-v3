import { EnableRadiusInput } from "./EnableRadiusInput";
import { EnableRadiusOutput } from "./EnableRadiusOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
