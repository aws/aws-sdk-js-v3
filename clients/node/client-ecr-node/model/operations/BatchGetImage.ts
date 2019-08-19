import { BatchGetImageInput } from "../shapes/BatchGetImageInput";
import { BatchGetImageOutput } from "../shapes/BatchGetImageOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetImageInput
  },
  output: {
    shape: BatchGetImageOutput
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
