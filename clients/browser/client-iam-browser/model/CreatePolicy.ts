import { CreatePolicyInput } from "./CreatePolicyInput";
import { CreatePolicyOutput } from "./CreatePolicyOutput";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
