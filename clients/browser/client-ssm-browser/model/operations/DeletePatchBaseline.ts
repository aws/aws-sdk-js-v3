import { DeletePatchBaselineInput } from "../shapes/DeletePatchBaselineInput";
import { DeletePatchBaselineOutput } from "../shapes/DeletePatchBaselineOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePatchBaseline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePatchBaseline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePatchBaselineInput
  },
  output: {
    shape: DeletePatchBaselineOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: InternalServerError
    }
  ]
};
