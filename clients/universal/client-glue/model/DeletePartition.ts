import { DeletePartitionInput } from "./DeletePartitionInput";
import { DeletePartitionOutput } from "./DeletePartitionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePartitionInput
  },
  output: {
    shape: DeletePartitionOutput
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
