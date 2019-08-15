import { GetWorkflowRunInput } from "../shapes/GetWorkflowRunInput";
import { GetWorkflowRunOutput } from "../shapes/GetWorkflowRunOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetWorkflowRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWorkflowRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWorkflowRunInput
  },
  output: {
    shape: GetWorkflowRunOutput
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
