import { DeleteHapgInput } from "./DeleteHapgInput";
import { DeleteHapgOutput } from "./DeleteHapgOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
