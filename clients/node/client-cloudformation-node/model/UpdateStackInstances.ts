import { UpdateStackInstancesInput } from "./UpdateStackInstancesInput";
import { UpdateStackInstancesOutput } from "./UpdateStackInstancesOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { StackInstanceNotFoundException } from "./StackInstanceNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
