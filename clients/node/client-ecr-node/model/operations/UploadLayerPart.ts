import { UploadLayerPartInput } from "../shapes/UploadLayerPartInput";
import { UploadLayerPartOutput } from "../shapes/UploadLayerPartOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidLayerPartException } from "../shapes/InvalidLayerPartException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { UploadNotFoundException } from "../shapes/UploadNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
