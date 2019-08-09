import { CreateProjectInput } from "./CreateProjectInput";
import { CreateProjectOutput } from "./CreateProjectOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProject",
  http: {
    method: "POST",
    requestUri: "/projects"
  },
  input: {
    shape: CreateProjectInput
  },
  output: {
    shape: CreateProjectOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceConflictException
    }
  ]
};
