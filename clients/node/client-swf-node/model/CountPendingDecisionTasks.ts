import { CountPendingDecisionTasksInput } from "./CountPendingDecisionTasksInput";
import { CountPendingDecisionTasksOutput } from "./CountPendingDecisionTasksOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CountPendingDecisionTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CountPendingDecisionTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CountPendingDecisionTasksInput
  },
  output: {
    shape: CountPendingDecisionTasksOutput
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
