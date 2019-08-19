import { RestoreBackupInput } from "../shapes/RestoreBackupInput";
import { RestoreBackupOutput } from "../shapes/RestoreBackupOutput";
import { CloudHsmInternalFailureException } from "../shapes/CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "../shapes/CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "../shapes/CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "../shapes/CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestoreBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreBackupInput
  },
  output: {
    shape: RestoreBackupOutput
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
