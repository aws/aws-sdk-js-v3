import { CreateProjectInput } from "../shapes/CreateProjectInput";
import { CreateProjectOutput } from "../shapes/CreateProjectOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { AccountLimitExceededException } from "../shapes/AccountLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProjectInput
  },
  output: {
    shape: CreateProjectOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: AccountLimitExceededException
    }
  ]
};
