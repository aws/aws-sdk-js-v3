import { CreateHapgInput } from "./CreateHapgInput";
import { CreateHapgOutput } from "./CreateHapgOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateHapg: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHapg",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHapgInput
  },
  output: {
    shape: CreateHapgOutput
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
