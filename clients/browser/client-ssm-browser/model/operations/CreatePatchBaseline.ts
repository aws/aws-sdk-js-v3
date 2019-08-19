import { CreatePatchBaselineInput } from "../shapes/CreatePatchBaselineInput";
import { CreatePatchBaselineOutput } from "../shapes/CreatePatchBaselineOutput";
import { IdempotentParameterMismatch } from "../shapes/IdempotentParameterMismatch";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
