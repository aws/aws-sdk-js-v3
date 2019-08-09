import { GetJobBookmarkInput } from "./GetJobBookmarkInput";
import { GetJobBookmarkOutput } from "./GetJobBookmarkOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetJobBookmark: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobBookmark",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobBookmarkInput
  },
  output: {
    shape: GetJobBookmarkOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ValidationException
    }
  ]
};
