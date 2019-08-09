import { RebuildEnvironmentInput } from "./RebuildEnvironmentInput";
import { RebuildEnvironmentOutput } from "./RebuildEnvironmentOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RebuildEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebuildEnvironment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebuildEnvironmentInput
  },
  output: {
    shape: RebuildEnvironmentOutput
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
