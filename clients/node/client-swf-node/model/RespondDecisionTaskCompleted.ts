import { RespondDecisionTaskCompletedInput } from "./RespondDecisionTaskCompletedInput";
import { RespondDecisionTaskCompletedOutput } from "./RespondDecisionTaskCompletedOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RespondDecisionTaskCompleted: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RespondDecisionTaskCompleted",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RespondDecisionTaskCompletedInput
  },
  output: {
    shape: RespondDecisionTaskCompletedOutput
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
