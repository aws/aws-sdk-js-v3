import { DeleteJobInput } from "../shapes/DeleteJobInput";
import { DeleteJobOutput } from "../shapes/DeleteJobOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteJobInput
  },
  output: {
    shape: DeleteJobOutput
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
    }
  ]
};
