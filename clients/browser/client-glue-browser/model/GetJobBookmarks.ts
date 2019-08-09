import { GetJobBookmarksInput } from "./GetJobBookmarksInput";
import { GetJobBookmarksOutput } from "./GetJobBookmarksOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
