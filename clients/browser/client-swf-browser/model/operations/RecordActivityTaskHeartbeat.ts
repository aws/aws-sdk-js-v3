import { RecordActivityTaskHeartbeatInput } from "../shapes/RecordActivityTaskHeartbeatInput";
import { RecordActivityTaskHeartbeatOutput } from "../shapes/RecordActivityTaskHeartbeatOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RecordActivityTaskHeartbeat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RecordActivityTaskHeartbeat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RecordActivityTaskHeartbeatInput
  },
  output: {
    shape: RecordActivityTaskHeartbeatOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
