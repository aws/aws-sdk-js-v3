import { PutImageInput } from "../shapes/PutImageInput";
import { PutImageOutput } from "../shapes/PutImageOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { ImageAlreadyExistsException } from "../shapes/ImageAlreadyExistsException";
import { LayersNotFoundException } from "../shapes/LayersNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ImageTagAlreadyExistsException } from "../shapes/ImageTagAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
