import { DeleteTableVersionInput } from "../shapes/DeleteTableVersionInput";
import { DeleteTableVersionOutput } from "../shapes/DeleteTableVersionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
