import { CreateTagsInput } from "./CreateTagsInput";
import { CreateTagsOutput } from "./CreateTagsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
