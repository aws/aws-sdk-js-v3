import { ListImagesInput } from "../shapes/ListImagesInput";
import { ListImagesOutput } from "../shapes/ListImagesOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListImagesInput
  },
  output: {
    shape: ListImagesOutput
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
