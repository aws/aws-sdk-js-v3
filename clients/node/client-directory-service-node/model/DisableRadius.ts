import { DisableRadiusInput } from "./DisableRadiusInput";
import { DisableRadiusOutput } from "./DisableRadiusOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableRadius: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableRadius",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableRadiusInput
  },
  output: {
    shape: DisableRadiusOutput
  },
  errors: [
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
