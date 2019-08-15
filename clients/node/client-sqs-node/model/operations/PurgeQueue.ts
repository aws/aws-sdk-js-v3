import { PurgeQueueInput } from "../shapes/PurgeQueueInput";
import { PurgeQueueOutput } from "../shapes/PurgeQueueOutput";
import { QueueDoesNotExist } from "../shapes/QueueDoesNotExist";
import { PurgeQueueInProgress } from "../shapes/PurgeQueueInProgress";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurgeQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurgeQueue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurgeQueueInput
  },
  output: {
    shape: PurgeQueueOutput
  },
  errors: [
    {
      shape: QueueDoesNotExist
    },
    {
      shape: PurgeQueueInProgress
    }
  ]
};
