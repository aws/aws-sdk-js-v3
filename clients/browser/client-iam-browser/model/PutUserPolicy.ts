import { PutUserPolicyInput } from "./PutUserPolicyInput";
import { PutUserPolicyOutput } from "./PutUserPolicyOutput";
import { LimitExceededException } from "./LimitExceededException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
