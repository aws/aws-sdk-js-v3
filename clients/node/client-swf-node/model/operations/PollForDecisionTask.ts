import { PollForDecisionTaskInput } from "../shapes/PollForDecisionTaskInput";
import { PollForDecisionTaskOutput } from "../shapes/PollForDecisionTaskOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
