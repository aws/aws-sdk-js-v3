import { CreateLunaClientInput } from "./CreateLunaClientInput";
import { CreateLunaClientOutput } from "./CreateLunaClientOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLunaClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLunaClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLunaClientInput
  },
  output: {
    shape: CreateLunaClientOutput
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
