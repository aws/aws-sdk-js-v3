import { PutUserPolicyInput } from "../shapes/PutUserPolicyInput";
import { PutUserPolicyOutput } from "../shapes/PutUserPolicyOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutUserPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutUserPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutUserPolicyInput
  },
  output: {
    shape: PutUserPolicyOutput
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
      shape: ServiceFailureException
    }
  ]
};
