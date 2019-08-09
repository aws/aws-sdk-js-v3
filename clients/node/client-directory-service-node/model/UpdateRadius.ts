import { UpdateRadiusInput } from "./UpdateRadiusInput";
import { UpdateRadiusOutput } from "./UpdateRadiusOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
