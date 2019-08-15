import { CreateStackInstancesInput } from "../shapes/CreateStackInstancesInput";
import { CreateStackInstancesOutput } from "../shapes/CreateStackInstancesOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { OperationIdAlreadyExistsException } from "../shapes/OperationIdAlreadyExistsException";
import { StaleRequestException } from "../shapes/StaleRequestException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStackInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStackInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStackInstancesInput
  },
  output: {
    shape: CreateStackInstancesOutput,
    resultWrapper: "CreateStackInstancesResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    },
    {
      shape: OperationInProgressException
    },
    {
      shape: OperationIdAlreadyExistsException
    },
    {
      shape: StaleRequestException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: LimitExceededException
    }
  ]
};
