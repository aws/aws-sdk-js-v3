import { AttachInstancesInput } from "./AttachInstancesInput";
import { AttachInstancesOutput } from "./AttachInstancesOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
