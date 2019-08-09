import { UpdateEnvironmentInput } from "./UpdateEnvironmentInput";
import { UpdateEnvironmentOutput } from "./UpdateEnvironmentOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
