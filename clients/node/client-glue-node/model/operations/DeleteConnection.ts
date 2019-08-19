import { DeleteConnectionInput } from "../shapes/DeleteConnectionInput";
import { DeleteConnectionOutput } from "../shapes/DeleteConnectionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConnectionInput
  },
  output: {
    shape: DeleteConnectionOutput
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
