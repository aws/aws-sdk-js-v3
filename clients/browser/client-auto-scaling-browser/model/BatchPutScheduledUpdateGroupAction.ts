import { BatchPutScheduledUpdateGroupActionInput } from "./BatchPutScheduledUpdateGroupActionInput";
import { BatchPutScheduledUpdateGroupActionOutput } from "./BatchPutScheduledUpdateGroupActionOutput";
import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchPutScheduledUpdateGroupAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchPutScheduledUpdateGroupAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchPutScheduledUpdateGroupActionInput
  },
  output: {
    shape: BatchPutScheduledUpdateGroupActionOutput,
    resultWrapper: "BatchPutScheduledUpdateGroupActionResult"
  },
  errors: [
    {
      shape: AlreadyExistsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
