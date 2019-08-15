import { BatchDeleteImageInput } from "../shapes/BatchDeleteImageInput";
import { BatchDeleteImageOutput } from "../shapes/BatchDeleteImageOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeleteImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteImageInput
  },
  output: {
    shape: BatchDeleteImageOutput
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
