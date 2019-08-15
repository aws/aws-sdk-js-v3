import { GetWorkflowRunsInput } from "../shapes/GetWorkflowRunsInput";
import { GetWorkflowRunsOutput } from "../shapes/GetWorkflowRunsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetWorkflowRuns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWorkflowRuns",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWorkflowRunsInput
  },
  output: {
    shape: GetWorkflowRunsOutput
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
