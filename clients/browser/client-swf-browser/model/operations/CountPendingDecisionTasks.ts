import { CountPendingDecisionTasksInput } from "../shapes/CountPendingDecisionTasksInput";
import { CountPendingDecisionTasksOutput } from "../shapes/CountPendingDecisionTasksOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
