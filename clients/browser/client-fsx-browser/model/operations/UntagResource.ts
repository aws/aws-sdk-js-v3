import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { NotServiceResourceError } from "../shapes/NotServiceResourceError";
import { ResourceDoesNotSupportTagging } from "../shapes/ResourceDoesNotSupportTagging";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
