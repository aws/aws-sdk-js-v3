import { CreateProjectInput } from "../shapes/CreateProjectInput";
import { CreateProjectOutput } from "../shapes/CreateProjectOutput";
import { ProjectAlreadyExistsException } from "../shapes/ProjectAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ValidationException } from "../shapes/ValidationException";
import { ProjectCreationFailedException } from "../shapes/ProjectCreationFailedException";
import { InvalidServiceRoleException } from "../shapes/InvalidServiceRoleException";
import { ProjectConfigurationException } from "../shapes/ProjectConfigurationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
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
      shape: ProjectAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ValidationException
    },
    {
      shape: ProjectCreationFailedException
    },
    {
      shape: InvalidServiceRoleException
    },
    {
      shape: ProjectConfigurationException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
