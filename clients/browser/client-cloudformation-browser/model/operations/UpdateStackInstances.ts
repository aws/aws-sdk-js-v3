import { UpdateStackInstancesInput } from "../shapes/UpdateStackInstancesInput";
import { UpdateStackInstancesOutput } from "../shapes/UpdateStackInstancesOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { StackInstanceNotFoundException } from "../shapes/StackInstanceNotFoundException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { OperationIdAlreadyExistsException } from "../shapes/OperationIdAlreadyExistsException";
import { StaleRequestException } from "../shapes/StaleRequestException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStackInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStackInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateStackInstancesInput
  },
  output: {
    shape: UpdateStackInstancesOutput,
    resultWrapper: "UpdateStackInstancesResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    },
    {
      shape: StackInstanceNotFoundException
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
    }
  ]
};
