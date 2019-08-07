import { PurgeQueueInput } from "./PurgeQueueInput";
import { PurgeQueueOutput } from "./PurgeQueueOutput";
import { QueueDoesNotExist } from "./QueueDoesNotExist";
import { PurgeQueueInProgress } from "./PurgeQueueInProgress";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
