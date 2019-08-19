import { AddTagsInput } from "../shapes/AddTagsInput";
import { AddTagsOutput } from "../shapes/AddTagsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { TagLimitExceededException } from "../shapes/TagLimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
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
      shape: InvalidInputException
    },
    {
      shape: InvalidTagException
    },
    {
      shape: TagLimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
