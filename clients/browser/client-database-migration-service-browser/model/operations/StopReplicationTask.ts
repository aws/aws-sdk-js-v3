import { StopReplicationTaskInput } from "../shapes/StopReplicationTaskInput";
import { StopReplicationTaskOutput } from "../shapes/StopReplicationTaskOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopReplicationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopReplicationTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopReplicationTaskInput
  },
  output: {
    shape: StopReplicationTaskOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};
