import { StopStackSetOperationInput } from "../shapes/StopStackSetOperationInput";
import { StopStackSetOperationOutput } from "../shapes/StopStackSetOperationOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationNotFoundException } from "../shapes/OperationNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopStackSetOperation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopStackSetOperation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopStackSetOperationInput
  },
  output: {
    shape: StopStackSetOperationOutput,
    resultWrapper: "StopStackSetOperationResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    },
    {
      shape: OperationNotFoundException
    },
    {
      shape: InvalidOperationException
    }
  ]
};
