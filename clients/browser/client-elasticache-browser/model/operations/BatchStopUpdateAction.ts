import { BatchStopUpdateActionInput } from "../shapes/BatchStopUpdateActionInput";
import { BatchStopUpdateActionOutput } from "../shapes/BatchStopUpdateActionOutput";
import { ServiceUpdateNotFoundFault } from "../shapes/ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
