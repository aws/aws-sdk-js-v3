import { CompareFacesInput } from "./CompareFacesInput";
import { CompareFacesOutput } from "./CompareFacesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { ImageTooLargeException } from "./ImageTooLargeException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidImageFormatException } from "./InvalidImageFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
