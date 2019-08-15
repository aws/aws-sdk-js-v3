import { DeleteAccountPasswordPolicyInput } from "../shapes/DeleteAccountPasswordPolicyInput";
import { DeleteAccountPasswordPolicyOutput } from "../shapes/DeleteAccountPasswordPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
