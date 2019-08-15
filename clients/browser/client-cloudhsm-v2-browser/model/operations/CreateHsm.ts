import { CreateHsmInput } from "../shapes/CreateHsmInput";
import { CreateHsmOutput } from "../shapes/CreateHsmOutput";
import { CloudHsmInternalFailureException } from "../shapes/CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInvalidRequestException } from "../shapes/CloudHsmInvalidRequestException";
import { CloudHsmResourceNotFoundException } from "../shapes/CloudHsmResourceNotFoundException";
import { CloudHsmAccessDeniedException } from "../shapes/CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateHsm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHsm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHsmInput
  },
  output: {
    shape: CreateHsmOutput
  },
  errors: [
    {
      shape: CloudHsmInternalFailureException
    },
    {
      shape: CloudHsmServiceException
    },
    {
      shape: CloudHsmInvalidRequestException
    },
    {
      shape: CloudHsmResourceNotFoundException
    },
    {
      shape: CloudHsmAccessDeniedException
    }
  ]
};
