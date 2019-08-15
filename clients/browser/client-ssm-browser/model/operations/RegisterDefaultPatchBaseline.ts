import { RegisterDefaultPatchBaselineInput } from "../shapes/RegisterDefaultPatchBaselineInput";
import { RegisterDefaultPatchBaselineOutput } from "../shapes/RegisterDefaultPatchBaselineOutput";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
