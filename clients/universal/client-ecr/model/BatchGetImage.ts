import { BatchGetImageInput } from "./BatchGetImageInput";
import { BatchGetImageOutput } from "./BatchGetImageOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
