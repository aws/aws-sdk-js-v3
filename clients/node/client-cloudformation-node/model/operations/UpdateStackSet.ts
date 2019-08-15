import { UpdateStackSetInput } from "../shapes/UpdateStackSetInput";
import { UpdateStackSetOutput } from "../shapes/UpdateStackSetOutput";
import { StackSetNotFoundException } from "../shapes/StackSetNotFoundException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { OperationIdAlreadyExistsException } from "../shapes/OperationIdAlreadyExistsException";
import { StaleRequestException } from "../shapes/StaleRequestException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { StackInstanceNotFoundException } from "../shapes/StackInstanceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStackSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStackSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateStackSetInput
  },
  output: {
    shape: UpdateStackSetOutput,
    resultWrapper: "UpdateStackSetResult"
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
      shape: StackInstanceNotFoundException
    }
  ]
};
