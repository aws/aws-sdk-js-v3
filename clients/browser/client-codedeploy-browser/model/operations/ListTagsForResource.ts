import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { ArnNotSupportedException } from "../shapes/ArnNotSupportedException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { ResourceArnRequiredException } from "../shapes/ResourceArnRequiredException";
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
      shape: ArnNotSupportedException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: ResourceArnRequiredException
    }
  ]
};
