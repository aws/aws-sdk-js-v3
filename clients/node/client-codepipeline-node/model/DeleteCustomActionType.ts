import { DeleteCustomActionTypeInput } from "./DeleteCustomActionTypeInput";
import { DeleteCustomActionTypeOutput } from "./DeleteCustomActionTypeOutput";
import { ValidationException } from "./ValidationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCustomActionType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCustomActionType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCustomActionTypeInput
  },
  output: {
    shape: DeleteCustomActionTypeOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
