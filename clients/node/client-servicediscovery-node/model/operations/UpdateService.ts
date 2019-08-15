import { UpdateServiceInput } from "../shapes/UpdateServiceInput";
import { UpdateServiceOutput } from "../shapes/UpdateServiceOutput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { InvalidInput } from "../shapes/InvalidInput";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateService",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServiceInput
  },
  output: {
    shape: UpdateServiceOutput
  },
  errors: [
    {
      shape: DuplicateRequest
    },
    {
      shape: InvalidInput
    },
    {
      shape: ServiceNotFound
    }
  ]
};
