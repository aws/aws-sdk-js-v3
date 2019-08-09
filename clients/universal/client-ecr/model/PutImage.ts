import { PutImageInput } from "./PutImageInput";
import { PutImageOutput } from "./PutImageOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { ImageAlreadyExistsException } from "./ImageAlreadyExistsException";
import { LayersNotFoundException } from "./LayersNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ImageTagAlreadyExistsException } from "./ImageTagAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutImageInput
  },
  output: {
    shape: PutImageOutput
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
      shape: ImageAlreadyExistsException
    },
    {
      shape: LayersNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ImageTagAlreadyExistsException
    }
  ]
};
