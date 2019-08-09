import { DeregisterInstanceInput } from "./DeregisterInstanceInput";
import { DeregisterInstanceOutput } from "./DeregisterInstanceOutput";
import { DuplicateRequest } from "./DuplicateRequest";
import { InvalidInput } from "./InvalidInput";
import { InstanceNotFound } from "./InstanceNotFound";
import { ResourceInUse } from "./ResourceInUse";
import { ServiceNotFound } from "./ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterInstanceInput
  },
  output: {
    shape: DeregisterInstanceOutput
  },
  errors: [
    {
      shape: DuplicateRequest
    },
    {
      shape: InvalidInput
    },
    {
      shape: InstanceNotFound
    },
    {
      shape: ResourceInUse
    },
    {
      shape: ServiceNotFound
    }
  ]
};
