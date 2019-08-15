import { PutRolePolicyInput } from "../shapes/PutRolePolicyInput";
import { PutRolePolicyOutput } from "../shapes/PutRolePolicyOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
