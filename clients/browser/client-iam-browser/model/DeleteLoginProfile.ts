import { DeleteLoginProfileInput } from "./DeleteLoginProfileInput";
import { DeleteLoginProfileOutput } from "./DeleteLoginProfileOutput";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLoginProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLoginProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLoginProfileInput
  },
  output: {
    shape: DeleteLoginProfileOutput
  },
  errors: [
    {
      shape: EntityTemporarilyUnmodifiableException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
