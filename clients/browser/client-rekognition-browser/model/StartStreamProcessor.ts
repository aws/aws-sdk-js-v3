import { StartStreamProcessorInput } from "./StartStreamProcessorInput";
import { StartStreamProcessorOutput } from "./StartStreamProcessorOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartStreamProcessor: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartStreamProcessor",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartStreamProcessorInput
  },
  output: {
    shape: StartStreamProcessorOutput
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
