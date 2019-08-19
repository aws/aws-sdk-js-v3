import { GetWorkflowRunPropertiesInput } from "../shapes/GetWorkflowRunPropertiesInput";
import { GetWorkflowRunPropertiesOutput } from "../shapes/GetWorkflowRunPropertiesOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetWorkflowRunProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWorkflowRunProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWorkflowRunPropertiesInput
  },
  output: {
    shape: GetWorkflowRunPropertiesOutput
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
