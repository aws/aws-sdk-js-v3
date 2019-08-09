import { UpdateAccountPasswordPolicyInput } from "./UpdateAccountPasswordPolicyInput";
import { UpdateAccountPasswordPolicyOutput } from "./UpdateAccountPasswordPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
