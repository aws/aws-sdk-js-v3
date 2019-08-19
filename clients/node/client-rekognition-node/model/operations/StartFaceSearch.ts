import { StartFaceSearchInput } from "../shapes/StartFaceSearchInput";
import { StartFaceSearchOutput } from "../shapes/StartFaceSearchOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { InternalServerError } from "../shapes/InternalServerError";
import { VideoTooLargeException } from "../shapes/VideoTooLargeException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartFaceSearch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartFaceSearch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartFaceSearchInput
  },
  output: {
    shape: StartFaceSearchOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidS3ObjectException
    },
    {
      shape: InternalServerError
    },
    {
      shape: VideoTooLargeException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    }
  ]
};
