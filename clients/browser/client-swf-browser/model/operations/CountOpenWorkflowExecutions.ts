import { CountOpenWorkflowExecutionsInput } from "../shapes/CountOpenWorkflowExecutionsInput";
import { CountOpenWorkflowExecutionsOutput } from "../shapes/CountOpenWorkflowExecutionsOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CountOpenWorkflowExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CountOpenWorkflowExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CountOpenWorkflowExecutionsInput
  },
  output: {
    shape: CountOpenWorkflowExecutionsOutput
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
