import { CompleteLayerUploadInput } from "../shapes/CompleteLayerUploadInput";
import { CompleteLayerUploadOutput } from "../shapes/CompleteLayerUploadOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { UploadNotFoundException } from "../shapes/UploadNotFoundException";
import { InvalidLayerException } from "../shapes/InvalidLayerException";
import { LayerPartTooSmallException } from "../shapes/LayerPartTooSmallException";
import { LayerAlreadyExistsException } from "../shapes/LayerAlreadyExistsException";
import { EmptyUploadException } from "../shapes/EmptyUploadException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CompleteLayerUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CompleteLayerUpload",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CompleteLayerUploadInput
  },
  output: {
    shape: CompleteLayerUploadOutput
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
    },
    {
      shape: UploadNotFoundException
    },
    {
      shape: InvalidLayerException
    },
    {
      shape: LayerPartTooSmallException
    },
    {
      shape: LayerAlreadyExistsException
    },
    {
      shape: EmptyUploadException
    }
  ]
};
