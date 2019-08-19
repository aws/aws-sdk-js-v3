import { RespondDecisionTaskCompletedInput } from "../shapes/RespondDecisionTaskCompletedInput";
import { RespondDecisionTaskCompletedOutput } from "../shapes/RespondDecisionTaskCompletedOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
