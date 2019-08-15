import { ListInstancesInput } from "../shapes/ListInstancesInput";
import { ListInstancesOutput } from "../shapes/ListInstancesOutput";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListInstancesInput
  },
  output: {
    shape: ListInstancesOutput
  },
  errors: [
    {
      shape: ServiceNotFound
    },
    {
      shape: InvalidInput
    }
  ]
};
