import { GetPatchBaselineInput } from "./GetPatchBaselineInput";
import { GetPatchBaselineOutput } from "./GetPatchBaselineOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
