import { UntagQueueInput } from "../shapes/UntagQueueInput";
import { UntagQueueOutput } from "../shapes/UntagQueueOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagQueue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagQueueInput
  },
  output: {
    shape: UntagQueueOutput
  },
  errors: []
};
