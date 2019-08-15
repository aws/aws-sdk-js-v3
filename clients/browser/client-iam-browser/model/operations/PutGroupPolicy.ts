import { PutGroupPolicyInput } from "../shapes/PutGroupPolicyInput";
import { PutGroupPolicyOutput } from "../shapes/PutGroupPolicyOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
