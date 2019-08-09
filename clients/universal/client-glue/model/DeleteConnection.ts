import { DeleteConnectionInput } from "./DeleteConnectionInput";
import { DeleteConnectionOutput } from "./DeleteConnectionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
