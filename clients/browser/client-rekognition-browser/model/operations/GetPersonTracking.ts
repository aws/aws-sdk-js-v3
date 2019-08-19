import { GetPersonTrackingInput } from "../shapes/GetPersonTrackingInput";
import { GetPersonTrackingOutput } from "../shapes/GetPersonTrackingOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
