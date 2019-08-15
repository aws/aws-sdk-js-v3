import { GetJobBookmarksInput } from "../shapes/GetJobBookmarksInput";
import { GetJobBookmarksOutput } from "../shapes/GetJobBookmarksOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJobBookmarks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobBookmarks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobBookmarksInput
  },
  output: {
    shape: GetJobBookmarksOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
