import { DeleteHsmInput } from "../shapes/DeleteHsmInput";
import { DeleteHsmOutput } from "../shapes/DeleteHsmOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
