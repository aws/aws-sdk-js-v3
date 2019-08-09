import { DeletePolicyVersionInput } from "./DeletePolicyVersionInput";
import { DeletePolicyVersionOutput } from "./DeletePolicyVersionOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { DeleteConflictException } from "./DeleteConflictException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePolicyVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePolicyVersionInput
  },
  output: {
    shape: DeletePolicyVersionOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
