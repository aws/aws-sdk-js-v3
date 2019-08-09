import { StartReplicationTaskInput } from "./StartReplicationTaskInput";
import { StartReplicationTaskOutput } from "./StartReplicationTaskOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
