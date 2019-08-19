import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { InvalidResourceType } from "../shapes/InvalidResourceType";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { InternalServerError } from "../shapes/InternalServerError";
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
      shape: InvalidResourceType
    },
    {
      shape: InvalidResourceId
    },
    {
      shape: InternalServerError
    }
  ]
};
