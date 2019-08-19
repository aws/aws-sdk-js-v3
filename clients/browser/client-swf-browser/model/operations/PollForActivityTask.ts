import { PollForActivityTaskInput } from "../shapes/PollForActivityTaskInput";
import { PollForActivityTaskOutput } from "../shapes/PollForActivityTaskOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
