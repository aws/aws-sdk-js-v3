import { GetDownloadUrlForLayerInput } from "./GetDownloadUrlForLayerInput";
import { GetDownloadUrlForLayerOutput } from "./GetDownloadUrlForLayerOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { LayersNotFoundException } from "./LayersNotFoundException";
import { LayerInaccessibleException } from "./LayerInaccessibleException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDownloadUrlForLayer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDownloadUrlForLayer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDownloadUrlForLayerInput
  },
  output: {
    shape: GetDownloadUrlForLayerOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: LayersNotFoundException
    },
    {
      shape: LayerInaccessibleException
    },
    {
      shape: RepositoryNotFoundException
    }
  ]
};
