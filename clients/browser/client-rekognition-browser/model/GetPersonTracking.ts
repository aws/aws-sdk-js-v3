import { GetPersonTrackingInput } from "./GetPersonTrackingInput";
import { GetPersonTrackingOutput } from "./GetPersonTrackingOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPersonTracking: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPersonTracking",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPersonTrackingInput
  },
  output: {
    shape: GetPersonTrackingOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidPaginationTokenException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    }
  ]
};
