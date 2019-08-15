import { RecognizeCelebritiesInput } from "../shapes/RecognizeCelebritiesInput";
import { RecognizeCelebritiesOutput } from "../shapes/RecognizeCelebritiesOutput";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidImageFormatException } from "../shapes/InvalidImageFormatException";
import { ImageTooLargeException } from "../shapes/ImageTooLargeException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RecognizeCelebrities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RecognizeCelebrities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RecognizeCelebritiesInput
  },
  output: {
    shape: RecognizeCelebritiesOutput
  },
  errors: [
    {
      shape: InvalidS3ObjectException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidImageFormatException
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
