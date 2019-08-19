import { RecordLifecycleActionHeartbeatInput } from "../shapes/RecordLifecycleActionHeartbeatInput";
import { RecordLifecycleActionHeartbeatOutput } from "../shapes/RecordLifecycleActionHeartbeatOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RecordLifecycleActionHeartbeat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RecordLifecycleActionHeartbeat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RecordLifecycleActionHeartbeatInput
  },
  output: {
    shape: RecordLifecycleActionHeartbeatOutput,
    resultWrapper: "RecordLifecycleActionHeartbeatResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
