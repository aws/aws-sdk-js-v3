import { ResetJobBookmarkInput } from "./ResetJobBookmarkInput";
import { ResetJobBookmarkOutput } from "./ResetJobBookmarkOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetJobBookmark: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetJobBookmark",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetJobBookmarkInput
  },
  output: {
    shape: ResetJobBookmarkOutput
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
    }
  ]
};
