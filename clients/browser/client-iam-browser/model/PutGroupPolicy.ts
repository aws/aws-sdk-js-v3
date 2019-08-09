import { PutGroupPolicyInput } from "./PutGroupPolicyInput";
import { PutGroupPolicyOutput } from "./PutGroupPolicyOutput";
import { LimitExceededException } from "./LimitExceededException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutGroupPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutGroupPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutGroupPolicyInput
  },
  output: {
    shape: PutGroupPolicyOutput
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
