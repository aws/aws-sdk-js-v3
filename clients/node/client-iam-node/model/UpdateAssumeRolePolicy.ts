import { UpdateAssumeRolePolicyInput } from "./UpdateAssumeRolePolicyInput";
import { UpdateAssumeRolePolicyOutput } from "./UpdateAssumeRolePolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAssumeRolePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAssumeRolePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAssumeRolePolicyInput
  },
  output: {
    shape: UpdateAssumeRolePolicyOutput
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
      shape: UnmodifiableEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
