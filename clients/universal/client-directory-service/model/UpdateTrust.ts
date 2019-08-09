import { UpdateTrustInput } from "./UpdateTrustInput";
import { UpdateTrustOutput } from "./UpdateTrustOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateTrust: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTrust",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTrustInput
  },
  output: {
    shape: UpdateTrustOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
