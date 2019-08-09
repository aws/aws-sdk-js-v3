import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { InvalidArn } from "./InvalidArn";
import { ResourceNotFound } from "./ResourceNotFound";
import { TooManyTags } from "./TooManyTags";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
