import { CreatePolicyVersionInput } from "./CreatePolicyVersionInput";
import { CreatePolicyVersionOutput } from "./CreatePolicyVersionOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePolicyVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePolicyVersionInput
  },
  output: {
    shape: CreatePolicyVersionOutput,
    resultWrapper: "CreatePolicyVersionResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
