import { UpdateRadiusInput } from "../shapes/UpdateRadiusInput";
import { UpdateRadiusOutput } from "../shapes/UpdateRadiusOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRadius: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRadius",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRadiusInput
  },
  output: {
    shape: UpdateRadiusOutput
  },
  errors: [
    {
      shape: InvalidParameterException
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
