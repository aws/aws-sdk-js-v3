import { DeleteTriggerInput } from "./DeleteTriggerInput";
import { DeleteTriggerOutput } from "./DeleteTriggerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
