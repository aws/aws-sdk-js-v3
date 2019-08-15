import { CreateTagsInput } from "../shapes/CreateTagsInput";
import { CreateTagsOutput } from "../shapes/CreateTagsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
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
      shape: AuthorizationErrorException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
