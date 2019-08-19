import { BatchDeleteScheduledActionInput } from "../shapes/BatchDeleteScheduledActionInput";
import { BatchDeleteScheduledActionOutput } from "../shapes/BatchDeleteScheduledActionOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeleteScheduledAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteScheduledAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteScheduledActionInput
  },
  output: {
    shape: BatchDeleteScheduledActionOutput,
    resultWrapper: "BatchDeleteScheduledActionResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
