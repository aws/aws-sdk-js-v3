import { CreateStreamProcessorInput } from "./CreateStreamProcessorInput";
import { CreateStreamProcessorOutput } from "./CreateStreamProcessorOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateStreamProcessor: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStreamProcessor",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStreamProcessorInput
  },
  output: {
    shape: CreateStreamProcessorOutput
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
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ProvisionedThroughputExceededException
    }
  ]
};
