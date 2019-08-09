import { CopyBackupToRegionInput } from "./CopyBackupToRegionInput";
import { CopyBackupToRegionOutput } from "./CopyBackupToRegionOutput";
import { CloudHsmInternalFailureException } from "./CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "./CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "./CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "./CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
