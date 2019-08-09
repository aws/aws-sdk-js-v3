import { DeleteBackupInput } from "./DeleteBackupInput";
import { DeleteBackupOutput } from "./DeleteBackupOutput";
import { CloudHsmInternalFailureException } from "./CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "./CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "./CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "./CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBackupInput
  },
  output: {
    shape: DeleteBackupOutput
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
