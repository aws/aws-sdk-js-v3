import { AddTagsToStreamInput } from "./AddTagsToStreamInput";
import { AddTagsToStreamOutput } from "./AddTagsToStreamOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
