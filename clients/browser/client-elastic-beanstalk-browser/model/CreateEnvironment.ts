import { CreateEnvironmentInput } from "./CreateEnvironmentInput";
import { CreateEnvironmentOutput } from "./CreateEnvironmentOutput";
import { TooManyEnvironmentsException } from "./TooManyEnvironmentsException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEnvironment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEnvironmentInput
  },
  output: {
    shape: CreateEnvironmentOutput,
    resultWrapper: "CreateEnvironmentResult"
  },
  errors: [
    {
      shape: TooManyEnvironmentsException
    },
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
