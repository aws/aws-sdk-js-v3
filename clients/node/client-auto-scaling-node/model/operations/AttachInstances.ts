import { AttachInstancesInput } from "../shapes/AttachInstancesInput";
import { AttachInstancesOutput } from "../shapes/AttachInstancesOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachInstancesInput
  },
  output: {
    shape: AttachInstancesOutput
  },
  errors: [
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
