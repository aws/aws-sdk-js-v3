import { CreateQueueInput } from "../shapes/CreateQueueInput";
import { CreateQueueOutput } from "../shapes/CreateQueueOutput";
import { QueueDeletedRecently } from "../shapes/QueueDeletedRecently";
import { QueueNameExists } from "../shapes/QueueNameExists";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateQueue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateQueueInput
  },
  output: {
    shape: CreateQueueOutput,
    resultWrapper: "CreateQueueResult"
  },
  errors: [
    {
      shape: QueueDeletedRecently
    },
    {
      shape: QueueNameExists
    }
  ]
};
