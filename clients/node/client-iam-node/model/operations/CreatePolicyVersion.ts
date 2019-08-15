import { CreatePolicyVersionInput } from "../shapes/CreatePolicyVersionInput";
import { CreatePolicyVersionOutput } from "../shapes/CreatePolicyVersionOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
