import { DisableRadiusInput } from "../shapes/DisableRadiusInput";
import { DisableRadiusOutput } from "../shapes/DisableRadiusOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
