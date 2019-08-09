import { ListImagesInput } from "./ListImagesInput";
import { ListImagesOutput } from "./ListImagesOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
