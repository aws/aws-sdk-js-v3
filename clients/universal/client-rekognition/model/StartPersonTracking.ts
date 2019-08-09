import { StartPersonTrackingInput } from "./StartPersonTrackingInput";
import { StartPersonTrackingOutput } from "./StartPersonTrackingOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { InternalServerError } from "./InternalServerError";
import { VideoTooLargeException } from "./VideoTooLargeException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
