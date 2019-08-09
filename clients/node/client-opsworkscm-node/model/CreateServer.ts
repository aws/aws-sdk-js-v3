import { CreateServerInput } from "./CreateServerInput";
import { CreateServerOutput } from "./CreateServerOutput";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
