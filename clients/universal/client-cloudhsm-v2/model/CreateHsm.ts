import { CreateHsmInput } from "./CreateHsmInput";
import { CreateHsmOutput } from "./CreateHsmOutput";
import { CloudHsmInternalFailureException } from "./CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInvalidRequestException } from "./CloudHsmInvalidRequestException";
import { CloudHsmResourceNotFoundException } from "./CloudHsmResourceNotFoundException";
import { CloudHsmAccessDeniedException } from "./CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
