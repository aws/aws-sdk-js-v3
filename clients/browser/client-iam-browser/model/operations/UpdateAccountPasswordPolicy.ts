import { UpdateAccountPasswordPolicyInput } from "../shapes/UpdateAccountPasswordPolicyInput";
import { UpdateAccountPasswordPolicyOutput } from "../shapes/UpdateAccountPasswordPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAccountPasswordPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAccountPasswordPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAccountPasswordPolicyInput
  },
  output: {
    shape: UpdateAccountPasswordPolicyOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
