import { RecognizeCelebritiesInput } from "./RecognizeCelebritiesInput";
import { RecognizeCelebritiesOutput } from "./RecognizeCelebritiesOutput";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidImageFormatException } from "./InvalidImageFormatException";
import { ImageTooLargeException } from "./ImageTooLargeException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
