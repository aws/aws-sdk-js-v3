import { UpdateJobInput } from "./UpdateJobInput";
import { UpdateJobOutput } from "./UpdateJobOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
