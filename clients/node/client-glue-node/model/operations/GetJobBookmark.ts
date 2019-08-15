import { GetJobBookmarkInput } from "../shapes/GetJobBookmarkInput";
import { GetJobBookmarkOutput } from "../shapes/GetJobBookmarkOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
