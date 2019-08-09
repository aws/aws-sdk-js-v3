import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { NotFoundException } from "./NotFoundException";
import { TagOperationException } from "./TagOperationException";
import { TooManyTagsException } from "./TooManyTagsException";
import { TagPolicyException } from "./TagPolicyException";
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
