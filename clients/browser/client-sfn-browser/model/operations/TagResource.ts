import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { InvalidArn } from "../shapes/InvalidArn";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { TooManyTags } from "../shapes/TooManyTags";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: InvalidArn
    },
    {
      shape: ResourceNotFound
    },
    {
      shape: TooManyTags
    }
  ]
};
