import { PutImageTagMutabilityInput } from "./PutImageTagMutabilityInput";
import { PutImageTagMutabilityOutput } from "./PutImageTagMutabilityOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
