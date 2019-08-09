import { DeleteStackSetInput } from "./DeleteStackSetInput";
import { DeleteStackSetOutput } from "./DeleteStackSetOutput";
import { StackSetNotEmptyException } from "./StackSetNotEmptyException";
import { OperationInProgressException } from "./OperationInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
