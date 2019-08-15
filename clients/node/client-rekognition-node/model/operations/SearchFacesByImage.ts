import { SearchFacesByImageInput } from "../shapes/SearchFacesByImageInput";
import { SearchFacesByImageOutput } from "../shapes/SearchFacesByImageOutput";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ImageTooLargeException } from "../shapes/ImageTooLargeException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidImageFormatException } from "../shapes/InvalidImageFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchFacesByImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchFacesByImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchFacesByImageInput
  },
  output: {
    shape: SearchFacesByImageOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidImageFormatException
    }
  ]
};
