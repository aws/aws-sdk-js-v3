import { UpdateJobInput } from "../shapes/UpdateJobInput";
import { UpdateJobOutput } from "../shapes/UpdateJobOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateJobInput
  },
  output: {
    shape: UpdateJobOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
