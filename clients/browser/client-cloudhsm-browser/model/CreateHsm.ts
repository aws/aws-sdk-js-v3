import { CreateHsmInput } from "./CreateHsmInput";
import { CreateHsmOutput } from "./CreateHsmOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
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
