import { BatchApplyUpdateActionInput } from "../shapes/BatchApplyUpdateActionInput";
import { BatchApplyUpdateActionOutput } from "../shapes/BatchApplyUpdateActionOutput";
import { ServiceUpdateNotFoundFault } from "../shapes/ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchApplyUpdateAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchApplyUpdateAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchApplyUpdateActionInput
  },
  output: {
    shape: BatchApplyUpdateActionOutput,
    resultWrapper: "BatchApplyUpdateActionResult"
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
