import { DiscoverInstancesInput } from "../shapes/DiscoverInstancesInput";
import { DiscoverInstancesOutput } from "../shapes/DiscoverInstancesOutput";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { NamespaceNotFound } from "../shapes/NamespaceNotFound";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DiscoverInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DiscoverInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DiscoverInstancesInput
  },
  output: {
    shape: DiscoverInstancesOutput
  },
  errors: [
    {
      shape: ServiceNotFound
    },
    {
      shape: NamespaceNotFound
    },
    {
      shape: InvalidInput
    }
  ]
};
