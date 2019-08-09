import { CompleteLayerUploadInput } from "./CompleteLayerUploadInput";
import { CompleteLayerUploadOutput } from "./CompleteLayerUploadOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { UploadNotFoundException } from "./UploadNotFoundException";
import { InvalidLayerException } from "./InvalidLayerException";
import { LayerPartTooSmallException } from "./LayerPartTooSmallException";
import { LayerAlreadyExistsException } from "./LayerAlreadyExistsException";
import { EmptyUploadException } from "./EmptyUploadException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
