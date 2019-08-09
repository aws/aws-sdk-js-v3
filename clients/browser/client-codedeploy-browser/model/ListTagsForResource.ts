import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ArnNotSupportedException } from "./ArnNotSupportedException";
import { InvalidArnException } from "./InvalidArnException";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
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
