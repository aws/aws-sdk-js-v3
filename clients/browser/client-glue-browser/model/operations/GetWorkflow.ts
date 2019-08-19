import { GetWorkflowInput } from "../shapes/GetWorkflowInput";
import { GetWorkflowOutput } from "../shapes/GetWorkflowOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetWorkflow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWorkflow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWorkflowInput
  },
  output: {
    shape: GetWorkflowOutput
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
