import { UpdateAssumeRolePolicyInput } from "../shapes/UpdateAssumeRolePolicyInput";
import { UpdateAssumeRolePolicyOutput } from "../shapes/UpdateAssumeRolePolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
