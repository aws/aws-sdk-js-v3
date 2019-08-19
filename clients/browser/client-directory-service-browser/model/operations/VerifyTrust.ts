import { VerifyTrustInput } from "../shapes/VerifyTrustInput";
import { VerifyTrustOutput } from "../shapes/VerifyTrustOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
