import { CreatePolicyInput } from "../shapes/CreatePolicyInput";
import { CreatePolicyOutput } from "../shapes/CreatePolicyOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePolicyInput
  },
  output: {
    shape: CreatePolicyOutput,
    resultWrapper: "CreatePolicyResult"
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
