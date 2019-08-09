import { SetDefaultPolicyVersionInput } from "./SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "./SetDefaultPolicyVersionOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
