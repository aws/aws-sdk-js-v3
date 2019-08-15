import { DeleteLoginProfileInput } from "../shapes/DeleteLoginProfileInput";
import { DeleteLoginProfileOutput } from "../shapes/DeleteLoginProfileOutput";
import { EntityTemporarilyUnmodifiableException } from "../shapes/EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
