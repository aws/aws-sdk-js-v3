import { DeleteApplicationVersionInput } from "../shapes/DeleteApplicationVersionInput";
import { DeleteApplicationVersionOutput } from "../shapes/DeleteApplicationVersionOutput";
import { SourceBundleDeletionException } from "../shapes/SourceBundleDeletionException";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { S3LocationNotInServiceRegionException } from "../shapes/S3LocationNotInServiceRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplicationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplicationVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationVersionInput
  },
  output: {
    shape: DeleteApplicationVersionOutput
  },
  errors: [
    {
      shape: SourceBundleDeletionException
    },
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: OperationInProgressException
    },
    {
      shape: S3LocationNotInServiceRegionException
    }
  ]
};
