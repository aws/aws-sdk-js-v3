import { ResetJobBookmarkInput } from "../shapes/ResetJobBookmarkInput";
import { ResetJobBookmarkOutput } from "../shapes/ResetJobBookmarkOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
