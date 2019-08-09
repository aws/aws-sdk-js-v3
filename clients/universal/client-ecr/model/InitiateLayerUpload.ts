import { InitiateLayerUploadInput } from "./InitiateLayerUploadInput";
import { InitiateLayerUploadOutput } from "./InitiateLayerUploadOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
