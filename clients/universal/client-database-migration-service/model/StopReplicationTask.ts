import { StopReplicationTaskInput } from "./StopReplicationTaskInput";
import { StopReplicationTaskOutput } from "./StopReplicationTaskOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
