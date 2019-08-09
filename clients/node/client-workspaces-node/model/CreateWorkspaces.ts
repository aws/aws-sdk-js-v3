import { CreateWorkspacesInput } from "./CreateWorkspacesInput";
import { CreateWorkspacesOutput } from "./CreateWorkspacesOutput";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateWorkspaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateWorkspaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateWorkspacesInput
  },
  output: {
    shape: CreateWorkspacesOutput
  },
  errors: [
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InvalidParameterValuesException
    }
  ]
};
