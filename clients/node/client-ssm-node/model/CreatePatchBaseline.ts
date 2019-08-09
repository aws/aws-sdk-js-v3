import { CreatePatchBaselineInput } from "./CreatePatchBaselineInput";
import { CreatePatchBaselineOutput } from "./CreatePatchBaselineOutput";
import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePatchBaseline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePatchBaseline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePatchBaselineInput
  },
  output: {
    shape: CreatePatchBaselineOutput
  },
  errors: [
    {
      shape: IdempotentParameterMismatch
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
