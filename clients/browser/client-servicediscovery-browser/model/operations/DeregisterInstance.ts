import { DeregisterInstanceInput } from "../shapes/DeregisterInstanceInput";
import { DeregisterInstanceOutput } from "../shapes/DeregisterInstanceOutput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { InvalidInput } from "../shapes/InvalidInput";
import { InstanceNotFound } from "../shapes/InstanceNotFound";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
