import { RegisterTargetsInput } from "../shapes/RegisterTargetsInput";
import { RegisterTargetsOutput } from "../shapes/RegisterTargetsOutput";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { TooManyTargetsException } from "../shapes/TooManyTargetsException";
import { InvalidTargetException } from "../shapes/InvalidTargetException";
import { TooManyRegistrationsForTargetIdException } from "../shapes/TooManyRegistrationsForTargetIdException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterTargetsInput
  },
  output: {
    shape: RegisterTargetsOutput,
    resultWrapper: "RegisterTargetsResult"
  },
  errors: [
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: TooManyTargetsException
    },
    {
      shape: InvalidTargetException
    },
    {
      shape: TooManyRegistrationsForTargetIdException
    }
  ]
};
