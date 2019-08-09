import { UpdateServiceInput } from "./UpdateServiceInput";
import { UpdateServiceOutput } from "./UpdateServiceOutput";
import { DuplicateRequest } from "./DuplicateRequest";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
