import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: RepositoryNotFoundException
    },
    {
      shape: ServerException
    }
  ]
};
