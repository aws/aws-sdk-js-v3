import { DeletePolicyVersionInput } from "../shapes/DeletePolicyVersionInput";
import { DeletePolicyVersionOutput } from "../shapes/DeletePolicyVersionOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
