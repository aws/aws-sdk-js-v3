import { DeleteLunaClientInput } from "../shapes/DeleteLunaClientInput";
import { DeleteLunaClientOutput } from "../shapes/DeleteLunaClientOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLunaClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLunaClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLunaClientInput
  },
  output: {
    shape: DeleteLunaClientOutput
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
