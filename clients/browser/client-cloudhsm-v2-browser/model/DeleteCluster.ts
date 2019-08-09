import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { CloudHsmInternalFailureException } from "./CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "./CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "./CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "./CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClusterInput
  },
  output: {
    shape: DeleteClusterOutput
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
