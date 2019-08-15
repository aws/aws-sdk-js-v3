import { CreateEnvironmentInput } from "../shapes/CreateEnvironmentInput";
import { CreateEnvironmentOutput } from "../shapes/CreateEnvironmentOutput";
import { TooManyEnvironmentsException } from "../shapes/TooManyEnvironmentsException";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
