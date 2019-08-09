import { PutRolePolicyInput } from "./PutRolePolicyInput";
import { PutRolePolicyOutput } from "./PutRolePolicyOutput";
import { LimitExceededException } from "./LimitExceededException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutRolePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRolePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRolePolicyInput
  },
  output: {
    shape: PutRolePolicyOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
