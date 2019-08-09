import { DeleteClassifierInput } from "./DeleteClassifierInput";
import { DeleteClassifierOutput } from "./DeleteClassifierOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
