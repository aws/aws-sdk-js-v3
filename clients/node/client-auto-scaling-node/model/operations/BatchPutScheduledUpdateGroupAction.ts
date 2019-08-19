import { BatchPutScheduledUpdateGroupActionInput } from "../shapes/BatchPutScheduledUpdateGroupActionInput";
import { BatchPutScheduledUpdateGroupActionOutput } from "../shapes/BatchPutScheduledUpdateGroupActionOutput";
import { AlreadyExistsFault } from "../shapes/AlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
