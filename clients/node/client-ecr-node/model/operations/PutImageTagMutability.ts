import { PutImageTagMutabilityInput } from "../shapes/PutImageTagMutabilityInput";
import { PutImageTagMutabilityOutput } from "../shapes/PutImageTagMutabilityOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutImageTagMutability: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutImageTagMutability",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutImageTagMutabilityInput
  },
  output: {
    shape: PutImageTagMutabilityOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: RepositoryNotFoundException
    }
  ]
};
