import { StopStackSetOperationInput } from "./StopStackSetOperationInput";
import { StopStackSetOperationOutput } from "./StopStackSetOperationOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationNotFoundException } from "./OperationNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
