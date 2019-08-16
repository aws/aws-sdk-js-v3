import { AddTagsToStreamInput } from "../shapes/AddTagsToStreamInput";
import { AddTagsToStreamOutput } from "../shapes/AddTagsToStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddTagsToStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTagsToStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsToStreamInput
  },
  output: {
    shape: AddTagsToStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
