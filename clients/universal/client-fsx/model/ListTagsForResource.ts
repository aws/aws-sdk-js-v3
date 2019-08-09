import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { ResourceNotFound } from "./ResourceNotFound";
import { NotServiceResourceError } from "./NotServiceResourceError";
import { ResourceDoesNotSupportTagging } from "./ResourceDoesNotSupportTagging";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: ResourceNotFound
    },
    {
      shape: NotServiceResourceError
    },
    {
      shape: ResourceDoesNotSupportTagging
    }
  ]
};
