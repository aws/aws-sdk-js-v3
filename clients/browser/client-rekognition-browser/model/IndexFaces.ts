import { IndexFacesInput } from "./IndexFacesInput";
import { IndexFacesOutput } from "./IndexFacesOutput";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ImageTooLargeException } from "./ImageTooLargeException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidImageFormatException } from "./InvalidImageFormatException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const IndexFaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "IndexFaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: IndexFacesInput
  },
  output: {
    shape: IndexFacesOutput
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
