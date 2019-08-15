import { DeleteCustomActionTypeInput } from "../shapes/DeleteCustomActionTypeInput";
import { DeleteCustomActionTypeOutput } from "../shapes/DeleteCustomActionTypeOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
