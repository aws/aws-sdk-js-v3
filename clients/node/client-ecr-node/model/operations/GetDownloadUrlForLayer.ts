import { GetDownloadUrlForLayerInput } from "../shapes/GetDownloadUrlForLayerInput";
import { GetDownloadUrlForLayerOutput } from "../shapes/GetDownloadUrlForLayerOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { LayersNotFoundException } from "../shapes/LayersNotFoundException";
import { LayerInaccessibleException } from "../shapes/LayerInaccessibleException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
