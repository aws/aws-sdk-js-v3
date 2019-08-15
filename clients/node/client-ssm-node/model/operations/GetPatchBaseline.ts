import { GetPatchBaselineInput } from "../shapes/GetPatchBaselineInput";
import { GetPatchBaselineOutput } from "../shapes/GetPatchBaselineOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPatchBaseline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPatchBaseline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPatchBaselineInput
  },
  output: {
    shape: GetPatchBaselineOutput
  },
  errors: [
    {
      shape: DoesNotExistException
    },
    {
      shape: InvalidResourceId
    },
    {
      shape: InternalServerError
    }
  ]
};
