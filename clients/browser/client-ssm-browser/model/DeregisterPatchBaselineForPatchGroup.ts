import { DeregisterPatchBaselineForPatchGroupInput } from "./DeregisterPatchBaselineForPatchGroupInput";
import { DeregisterPatchBaselineForPatchGroupOutput } from "./DeregisterPatchBaselineForPatchGroupOutput";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterPatchBaselineForPatchGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterPatchBaselineForPatchGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterPatchBaselineForPatchGroupInput
  },
  output: {
    shape: DeregisterPatchBaselineForPatchGroupOutput
  },
  errors: [
    {
      shape: InvalidResourceId
    },
    {
      shape: InternalServerError
    }
  ]
};
