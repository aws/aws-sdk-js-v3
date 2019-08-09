import { GetJobRunInput } from "./GetJobRunInput";
import { GetJobRunOutput } from "./GetJobRunOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetJobRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobRunInput
  },
  output: {
    shape: GetJobRunOutput
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
