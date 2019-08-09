import { DeleteInstanceProfileInput } from "./DeleteInstanceProfileInput";
import { DeleteInstanceProfileOutput } from "./DeleteInstanceProfileOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { DeleteConflictException } from "./DeleteConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteInstanceProfileInput
  },
  output: {
    shape: DeleteInstanceProfileOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
