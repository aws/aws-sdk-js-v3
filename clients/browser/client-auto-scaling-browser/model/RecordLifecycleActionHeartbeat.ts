import { RecordLifecycleActionHeartbeatInput } from "./RecordLifecycleActionHeartbeatInput";
import { RecordLifecycleActionHeartbeatOutput } from "./RecordLifecycleActionHeartbeatOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
