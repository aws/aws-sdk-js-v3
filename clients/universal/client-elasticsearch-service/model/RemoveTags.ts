import { RemoveTagsInput } from "./RemoveTagsInput";
import { RemoveTagsOutput } from "./RemoveTagsOutput";
import { BaseException } from "./BaseException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTags",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/tags-removal"
  },
  input: {
    shape: RemoveTagsInput
  },
  output: {
    shape: RemoveTagsOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalException
    }
  ]
};
