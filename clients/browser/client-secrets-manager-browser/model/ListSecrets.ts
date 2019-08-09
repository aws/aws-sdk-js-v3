import { ListSecretsInput } from "./ListSecretsInput";
import { ListSecretsOutput } from "./ListSecretsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
