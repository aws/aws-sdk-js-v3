import { CreateClusterInput } from "../shapes/CreateClusterInput";
import { CreateClusterOutput } from "../shapes/CreateClusterOutput";
import { CloudHsmInternalFailureException } from "../shapes/CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "../shapes/CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "../shapes/CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "../shapes/CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterInput
  },
  output: {
    shape: CreateClusterOutput
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
