import { DeleteStackInstancesInput } from "./DeleteStackInstancesInput";
import { DeleteStackInstancesOutput } from "./DeleteStackInstancesOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
