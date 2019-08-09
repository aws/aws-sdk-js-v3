import { DeleteApplicationVersionInput } from "./DeleteApplicationVersionInput";
import { DeleteApplicationVersionOutput } from "./DeleteApplicationVersionOutput";
import { SourceBundleDeletionException } from "./SourceBundleDeletionException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationInProgressException } from "./OperationInProgressException";
import { S3LocationNotInServiceRegionException } from "./S3LocationNotInServiceRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
