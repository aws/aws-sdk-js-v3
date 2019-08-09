import { DeleteStreamProcessorInput } from "./DeleteStreamProcessorInput";
import { DeleteStreamProcessorOutput } from "./DeleteStreamProcessorOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteStreamProcessor: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStreamProcessor",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteStreamProcessorInput
  },
  output: {
    shape: DeleteStreamProcessorOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ProvisionedThroughputExceededException
    }
  ]
};
