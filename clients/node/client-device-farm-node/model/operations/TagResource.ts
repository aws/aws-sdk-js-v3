import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TagOperationException } from "../shapes/TagOperationException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { TagPolicyException } from "../shapes/TagPolicyException";
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
      shape: NotFoundException
    },
    {
      shape: TagOperationException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: TagPolicyException
    }
  ]
};
