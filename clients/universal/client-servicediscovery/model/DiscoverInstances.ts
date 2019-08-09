import { DiscoverInstancesInput } from "./DiscoverInstancesInput";
import { DiscoverInstancesOutput } from "./DiscoverInstancesOutput";
import { ServiceNotFound } from "./ServiceNotFound";
import { NamespaceNotFound } from "./NamespaceNotFound";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
