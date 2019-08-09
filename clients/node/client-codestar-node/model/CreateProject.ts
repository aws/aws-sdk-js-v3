import { CreateProjectInput } from "./CreateProjectInput";
import { CreateProjectOutput } from "./CreateProjectOutput";
import { ProjectAlreadyExistsException } from "./ProjectAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ValidationException } from "./ValidationException";
import { ProjectCreationFailedException } from "./ProjectCreationFailedException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
