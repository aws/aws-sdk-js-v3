import { PollForDecisionTaskInput } from "./PollForDecisionTaskInput";
import { PollForDecisionTaskOutput } from "./PollForDecisionTaskOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PollForDecisionTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForDecisionTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForDecisionTaskInput
  },
  output: {
    shape: PollForDecisionTaskOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    },
    {
      shape: LimitExceededFault
    }
  ]
};
