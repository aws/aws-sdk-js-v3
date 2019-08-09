import { RecordActivityTaskHeartbeatInput } from "./RecordActivityTaskHeartbeatInput";
import { RecordActivityTaskHeartbeatOutput } from "./RecordActivityTaskHeartbeatOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
