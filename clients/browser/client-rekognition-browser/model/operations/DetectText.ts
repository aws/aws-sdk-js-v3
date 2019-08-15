import { DetectTextInput } from "../shapes/DetectTextInput";
import { DetectTextOutput } from "../shapes/DetectTextOutput";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ImageTooLargeException } from "../shapes/ImageTooLargeException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InvalidImageFormatException } from "../shapes/InvalidImageFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetectText: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectText",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectTextInput
  },
  output: {
    shape: DetectTextOutput
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
