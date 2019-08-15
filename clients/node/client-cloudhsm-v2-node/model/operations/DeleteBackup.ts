import { DeleteBackupInput } from "../shapes/DeleteBackupInput";
import { DeleteBackupOutput } from "../shapes/DeleteBackupOutput";
import { CloudHsmInternalFailureException } from "../shapes/CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "../shapes/CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "../shapes/CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "../shapes/CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
