import { RegisterTargetsInput } from "./RegisterTargetsInput";
import { RegisterTargetsOutput } from "./RegisterTargetsOutput";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { InvalidTargetException } from "./InvalidTargetException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
