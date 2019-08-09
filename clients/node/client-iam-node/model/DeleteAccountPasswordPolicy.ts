import { DeleteAccountPasswordPolicyInput } from "./DeleteAccountPasswordPolicyInput";
import { DeleteAccountPasswordPolicyOutput } from "./DeleteAccountPasswordPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAccountPasswordPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAccountPasswordPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAccountPasswordPolicyInput
  },
  output: {
    shape: DeleteAccountPasswordPolicyOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
