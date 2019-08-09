import { BatchDeleteImageInput } from "./BatchDeleteImageInput";
import { BatchDeleteImageOutput } from "./BatchDeleteImageOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
