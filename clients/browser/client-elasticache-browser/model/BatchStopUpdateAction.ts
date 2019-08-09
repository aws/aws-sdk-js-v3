import { BatchStopUpdateActionInput } from "./BatchStopUpdateActionInput";
import { BatchStopUpdateActionOutput } from "./BatchStopUpdateActionOutput";
import { ServiceUpdateNotFoundFault } from "./ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchStopUpdateAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchStopUpdateAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchStopUpdateActionInput
  },
  output: {
    shape: BatchStopUpdateActionOutput,
    resultWrapper: "BatchStopUpdateActionResult"
  },
  errors: [
    {
      shape: ServiceUpdateNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
