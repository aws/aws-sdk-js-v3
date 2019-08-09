import { GetJobInput } from "./GetJobInput";
import { GetJobOutput } from "./GetJobOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobInput
  },
  output: {
    shape: GetJobOutput
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
    }
  ]
};
