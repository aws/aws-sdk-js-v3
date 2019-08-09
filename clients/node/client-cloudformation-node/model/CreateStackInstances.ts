import { CreateStackInstancesInput } from "./CreateStackInstancesInput";
import { CreateStackInstancesOutput } from "./CreateStackInstancesOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
