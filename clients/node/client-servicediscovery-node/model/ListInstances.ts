import { ListInstancesInput } from "./ListInstancesInput";
import { ListInstancesOutput } from "./ListInstancesOutput";
import { ServiceNotFound } from "./ServiceNotFound";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
