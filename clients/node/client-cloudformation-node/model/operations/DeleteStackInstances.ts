import { DeleteStackInstancesInput } from "../shapes/DeleteStackInstancesInput";
import { DeleteStackInstancesOutput } from "../shapes/DeleteStackInstancesOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { OperationIdAlreadyExistsException } from "../shapes/OperationIdAlreadyExistsException";
import { StaleRequestException } from "../shapes/StaleRequestException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStackInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStackInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteStackInstancesInput
  },
  output: {
    shape: DeleteStackInstancesOutput,
    resultWrapper: "DeleteStackInstancesResult"
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
    }
  ]
};
