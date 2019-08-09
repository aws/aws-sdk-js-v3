import { GetPatchBaselineForPatchGroupInput } from "./GetPatchBaselineForPatchGroupInput";
import { GetPatchBaselineForPatchGroupOutput } from "./GetPatchBaselineForPatchGroupOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPatchBaselineForPatchGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPatchBaselineForPatchGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPatchBaselineForPatchGroupInput
  },
  output: {
    shape: GetPatchBaselineForPatchGroupOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
