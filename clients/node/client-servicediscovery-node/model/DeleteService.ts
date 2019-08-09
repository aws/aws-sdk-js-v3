import { DeleteServiceInput } from "./DeleteServiceInput";
import { DeleteServiceOutput } from "./DeleteServiceOutput";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
import { ResourceInUse } from "./ResourceInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteService",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServiceInput
  },
  output: {
    shape: DeleteServiceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: ServiceNotFound
    },
    {
      shape: ResourceInUse
    }
  ]
};
