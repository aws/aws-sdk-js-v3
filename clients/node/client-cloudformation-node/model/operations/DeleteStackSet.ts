import { DeleteStackSetInput } from "../shapes/DeleteStackSetInput";
import { DeleteStackSetOutput } from "../shapes/DeleteStackSetOutput";
import { StackSetNotEmptyException } from "../shapes/StackSetNotEmptyException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStackSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStackSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteStackSetInput
  },
  output: {
    shape: DeleteStackSetOutput,
    resultWrapper: "DeleteStackSetResult"
  },
  errors: [
    {
      shape: StackSetNotEmptyException
    },
    {
      shape: OperationInProgressException
    }
  ]
};
