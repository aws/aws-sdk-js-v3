import { VerifyTrustInput } from "./VerifyTrustInput";
import { VerifyTrustOutput } from "./VerifyTrustOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const VerifyTrust: _Operation_ = {
  metadata: ServiceMetadata,
  name: "VerifyTrust",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: VerifyTrustInput
  },
  output: {
    shape: VerifyTrustOutput
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
