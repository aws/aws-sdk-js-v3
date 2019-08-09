import { DetectModerationLabelsInput } from "./DetectModerationLabelsInput";
import { DetectModerationLabelsOutput } from "./DetectModerationLabelsOutput";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ImageTooLargeException } from "./ImageTooLargeException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidImageFormatException } from "./InvalidImageFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetectModerationLabels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectModerationLabels",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectModerationLabelsInput
  },
  output: {
    shape: DetectModerationLabelsOutput
  },
  errors: [
    {
      shape: InvalidS3ObjectException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ImageTooLargeException
    },
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
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: InvalidImageFormatException
    }
  ]
};
