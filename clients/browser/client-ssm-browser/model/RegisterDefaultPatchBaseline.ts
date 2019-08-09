import { RegisterDefaultPatchBaselineInput } from "./RegisterDefaultPatchBaselineInput";
import { RegisterDefaultPatchBaselineOutput } from "./RegisterDefaultPatchBaselineOutput";
import { InvalidResourceId } from "./InvalidResourceId";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterDefaultPatchBaseline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterDefaultPatchBaseline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterDefaultPatchBaselineInput
  },
  output: {
    shape: RegisterDefaultPatchBaselineOutput
  },
  errors: [
    {
      shape: InvalidResourceId
    },
    {
      shape: DoesNotExistException
    },
    {
      shape: InternalServerError
    }
  ]
};
