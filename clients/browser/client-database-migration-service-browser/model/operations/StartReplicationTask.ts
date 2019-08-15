import { StartReplicationTaskInput } from "../shapes/StartReplicationTaskInput";
import { StartReplicationTaskOutput } from "../shapes/StartReplicationTaskOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartReplicationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartReplicationTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartReplicationTaskInput
  },
  output: {
    shape: StartReplicationTaskOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: AccessDeniedFault
    }
  ]
};
