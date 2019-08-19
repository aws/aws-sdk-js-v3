import { DeleteHapgInput } from "../shapes/DeleteHapgInput";
import { DeleteHapgOutput } from "../shapes/DeleteHapgOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteHapg: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteHapg",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteHapgInput
  },
  output: {
    shape: DeleteHapgOutput
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
