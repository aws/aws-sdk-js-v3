import { TerminateEnvironmentInput } from "./TerminateEnvironmentInput";
import { TerminateEnvironmentOutput } from "./TerminateEnvironmentOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TerminateEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateEnvironment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateEnvironmentInput
  },
  output: {
    shape: TerminateEnvironmentOutput,
    resultWrapper: "TerminateEnvironmentResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
