import { UploadLayerPartInput } from "./UploadLayerPartInput";
import { UploadLayerPartOutput } from "./UploadLayerPartOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidLayerPartException } from "./InvalidLayerPartException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { UploadNotFoundException } from "./UploadNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UploadLayerPart: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadLayerPart",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UploadLayerPartInput
  },
  output: {
    shape: UploadLayerPartOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidLayerPartException
    },
    {
      shape: RepositoryNotFoundException
    },
    {
      shape: UploadNotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
