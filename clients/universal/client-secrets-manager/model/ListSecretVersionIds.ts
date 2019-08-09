import { ListSecretVersionIdsInput } from "./ListSecretVersionIdsInput";
import { ListSecretVersionIdsOutput } from "./ListSecretVersionIdsOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSecretVersionIds: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSecretVersionIds",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSecretVersionIdsInput
  },
  output: {
    shape: ListSecretVersionIdsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceError
    }
  ]
};
