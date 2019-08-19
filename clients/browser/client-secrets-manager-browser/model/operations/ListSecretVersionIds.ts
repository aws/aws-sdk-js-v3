import { ListSecretVersionIdsInput } from "../shapes/ListSecretVersionIdsInput";
import { ListSecretVersionIdsOutput } from "../shapes/ListSecretVersionIdsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
