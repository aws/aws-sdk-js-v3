import { CountPendingActivityTasksInput } from "./CountPendingActivityTasksInput";
import { CountPendingActivityTasksOutput } from "./CountPendingActivityTasksOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CountPendingActivityTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CountPendingActivityTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CountPendingActivityTasksInput
  },
  output: {
    shape: CountPendingActivityTasksOutput
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
