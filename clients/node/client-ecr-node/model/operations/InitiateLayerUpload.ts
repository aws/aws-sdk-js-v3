import { InitiateLayerUploadInput } from "../shapes/InitiateLayerUploadInput";
import { InitiateLayerUploadOutput } from "../shapes/InitiateLayerUploadOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InitiateLayerUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InitiateLayerUpload",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: InitiateLayerUploadInput
  },
  output: {
    shape: InitiateLayerUploadOutput
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
