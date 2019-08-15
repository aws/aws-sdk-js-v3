import { CreateServerInput } from "../shapes/CreateServerInput";
import { CreateServerOutput } from "../shapes/CreateServerOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateServerInput
  },
  output: {
    shape: CreateServerOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
