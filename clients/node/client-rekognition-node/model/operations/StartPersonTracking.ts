import { StartPersonTrackingInput } from "../shapes/StartPersonTrackingInput";
import { StartPersonTrackingOutput } from "../shapes/StartPersonTrackingOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { InternalServerError } from "../shapes/InternalServerError";
import { VideoTooLargeException } from "../shapes/VideoTooLargeException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartPersonTracking: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartPersonTracking",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartPersonTrackingInput
  },
  output: {
    shape: StartPersonTrackingOutput
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
      shape: ThrottlingException
    }
  ]
};
