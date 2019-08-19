import { UpdateTrustInput } from "../shapes/UpdateTrustInput";
import { UpdateTrustOutput } from "../shapes/UpdateTrustOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
