import { UpdatePatchBaselineInput } from "../shapes/UpdatePatchBaselineInput";
import { UpdatePatchBaselineOutput } from "../shapes/UpdatePatchBaselineOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePatchBaseline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePatchBaseline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePatchBaselineInput
  },
  output: {
    shape: UpdatePatchBaselineOutput
  },
  errors: [
    {
      shape: DoesNotExistException
    },
    {
      shape: InternalServerError
    }
  ]
};
