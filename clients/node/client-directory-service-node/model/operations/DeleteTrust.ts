import { DeleteTrustInput } from "../shapes/DeleteTrustInput";
import { DeleteTrustOutput } from "../shapes/DeleteTrustOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTrust: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrust",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTrustInput
  },
  output: {
    shape: DeleteTrustOutput
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
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
