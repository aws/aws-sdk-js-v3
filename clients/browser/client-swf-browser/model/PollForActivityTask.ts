import { PollForActivityTaskInput } from "./PollForActivityTaskInput";
import { PollForActivityTaskOutput } from "./PollForActivityTaskOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PollForActivityTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForActivityTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForActivityTaskInput
  },
  output: {
    shape: PollForActivityTaskOutput
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
