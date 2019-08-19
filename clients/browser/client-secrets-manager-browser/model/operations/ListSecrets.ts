import { ListSecretsInput } from "../shapes/ListSecretsInput";
import { ListSecretsOutput } from "../shapes/ListSecretsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSecrets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSecrets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSecretsInput
  },
  output: {
    shape: ListSecretsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InternalServiceError
    }
  ]
};
