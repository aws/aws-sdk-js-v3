import { CompareFacesInput } from "../shapes/CompareFacesInput";
import { CompareFacesOutput } from "../shapes/CompareFacesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { ImageTooLargeException } from "../shapes/ImageTooLargeException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InvalidImageFormatException } from "../shapes/InvalidImageFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CompareFaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CompareFaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CompareFacesInput
  },
  output: {
    shape: CompareFacesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidS3ObjectException
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
