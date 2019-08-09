import { GetDefaultPatchBaselineInput } from "./GetDefaultPatchBaselineInput";
import { GetDefaultPatchBaselineOutput } from "./GetDefaultPatchBaselineOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDefaultPatchBaseline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDefaultPatchBaseline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDefaultPatchBaselineInput
  },
  output: {
    shape: GetDefaultPatchBaselineOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
