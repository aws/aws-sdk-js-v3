import { UpdateStackSetInput } from "./UpdateStackSetInput";
import { UpdateStackSetOutput } from "./UpdateStackSetOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationIdAlreadyExistsException } from "./OperationIdAlreadyExistsException";
import { StaleRequestException } from "./StaleRequestException";
import { InvalidOperationException } from "./InvalidOperationException";
import { StackInstanceNotFoundException } from "./StackInstanceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
