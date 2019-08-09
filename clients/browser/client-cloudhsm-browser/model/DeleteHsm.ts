import { DeleteHsmInput } from "./DeleteHsmInput";
import { DeleteHsmOutput } from "./DeleteHsmOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteHsm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteHsm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteHsmInput
  },
  output: {
    shape: DeleteHsmOutput
  },
  errors: [
    {
      shape: CloudHsmServiceException
    },
    {
      shape: CloudHsmInternalException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
