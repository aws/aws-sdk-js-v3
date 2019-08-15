import { DeleteTriggerInput } from "../shapes/DeleteTriggerInput";
import { DeleteTriggerOutput } from "../shapes/DeleteTriggerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTrigger: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrigger",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTriggerInput
  },
  output: {
    shape: DeleteTriggerOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
