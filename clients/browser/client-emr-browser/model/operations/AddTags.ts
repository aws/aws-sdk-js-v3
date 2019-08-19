import { AddTagsInput } from "../shapes/AddTagsInput";
import { AddTagsOutput } from "../shapes/AddTagsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsInput
  },
  output: {
    shape: AddTagsOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
