import { StopStreamProcessorInput } from "../shapes/StopStreamProcessorInput";
import { StopStreamProcessorOutput } from "../shapes/StopStreamProcessorOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopStreamProcessor: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopStreamProcessor",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopStreamProcessorInput
  },
  output: {
    shape: StopStreamProcessorOutput
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
