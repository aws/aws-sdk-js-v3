import { DeregisterTargetsInput } from "./DeregisterTargetsInput";
import { DeregisterTargetsOutput } from "./DeregisterTargetsOutput";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { InvalidTargetException } from "./InvalidTargetException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterTargetsInput
  },
  output: {
    shape: DeregisterTargetsOutput,
    resultWrapper: "DeregisterTargetsResult"
  },
  errors: [
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: InvalidTargetException
    }
  ]
};
