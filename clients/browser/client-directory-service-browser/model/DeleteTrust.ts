import { DeleteTrustInput } from "./DeleteTrustInput";
import { DeleteTrustOutput } from "./DeleteTrustOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
