import { StartLabelDetectionInput } from "../shapes/StartLabelDetectionInput";
import { StartLabelDetectionOutput } from "../shapes/StartLabelDetectionOutput";
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

export const StartLabelDetection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartLabelDetection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartLabelDetectionInput
  },
  output: {
    shape: StartLabelDetectionOutput
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
