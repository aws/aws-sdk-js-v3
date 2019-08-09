import { UntagResourceInput } from "./UntagResourceInput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { ResourceNotFound } from "./ResourceNotFound";
import { NotServiceResourceError } from "./NotServiceResourceError";
import { ResourceDoesNotSupportTagging } from "./ResourceDoesNotSupportTagging";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
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
