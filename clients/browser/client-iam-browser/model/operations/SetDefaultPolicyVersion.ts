import { SetDefaultPolicyVersionInput } from "../shapes/SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "../shapes/SetDefaultPolicyVersionOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetDefaultPolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetDefaultPolicyVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetDefaultPolicyVersionInput
  },
  output: {
    shape: SetDefaultPolicyVersionOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
