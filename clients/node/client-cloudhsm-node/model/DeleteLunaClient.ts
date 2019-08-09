import { DeleteLunaClientInput } from "./DeleteLunaClientInput";
import { DeleteLunaClientOutput } from "./DeleteLunaClientOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
