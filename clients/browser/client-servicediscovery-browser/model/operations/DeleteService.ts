import { DeleteServiceInput } from "../shapes/DeleteServiceInput";
import { DeleteServiceOutput } from "../shapes/DeleteServiceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
