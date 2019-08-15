import { CopyBackupToRegionInput } from "../shapes/CopyBackupToRegionInput";
import { CopyBackupToRegionOutput } from "../shapes/CopyBackupToRegionOutput";
import { CloudHsmInternalFailureException } from "../shapes/CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "../shapes/CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "../shapes/CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "../shapes/CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyBackupToRegion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyBackupToRegion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyBackupToRegionInput
  },
  output: {
    shape: CopyBackupToRegionOutput
  },
  errors: [
    {
      shape: CloudHsmInternalFailureException
    },
    {
      shape: CloudHsmServiceException
    },
    {
      shape: CloudHsmResourceNotFoundException
    },
    {
      shape: CloudHsmInvalidRequestException
    },
    {
      shape: CloudHsmAccessDeniedException
    }
  ]
};
