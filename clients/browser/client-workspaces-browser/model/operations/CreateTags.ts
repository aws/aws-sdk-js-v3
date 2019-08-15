import { CreateTagsInput } from "../shapes/CreateTagsInput";
import { CreateTagsOutput } from "../shapes/CreateTagsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTagsInput
  },
  output: {
    shape: CreateTagsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceLimitExceededException
    }
  ]
};
