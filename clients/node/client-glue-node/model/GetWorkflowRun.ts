import { GetWorkflowRunInput } from "./GetWorkflowRunInput";
import { GetWorkflowRunOutput } from "./GetWorkflowRunOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
