import { DeleteTableVersionInput } from "./DeleteTableVersionInput";
import { DeleteTableVersionOutput } from "./DeleteTableVersionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTableVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTableVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTableVersionInput
  },
  output: {
    shape: DeleteTableVersionOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
