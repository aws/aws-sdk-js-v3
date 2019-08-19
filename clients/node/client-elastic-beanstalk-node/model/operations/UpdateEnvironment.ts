import { UpdateEnvironmentInput } from "../shapes/UpdateEnvironmentInput";
import { UpdateEnvironmentOutput } from "../shapes/UpdateEnvironmentOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { TooManyBucketsException } from "../shapes/TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEnvironment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEnvironmentInput
  },
  output: {
    shape: UpdateEnvironmentOutput,
    resultWrapper: "UpdateEnvironmentResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: TooManyBucketsException
    }
  ]
};
