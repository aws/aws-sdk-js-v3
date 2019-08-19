import { GetJobRunInput } from "../shapes/GetJobRunInput";
import { GetJobRunOutput } from "../shapes/GetJobRunOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
