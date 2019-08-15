import { DeleteClassifierInput } from "../shapes/DeleteClassifierInput";
import { DeleteClassifierOutput } from "../shapes/DeleteClassifierOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClassifierInput
  },
  output: {
    shape: DeleteClassifierOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
