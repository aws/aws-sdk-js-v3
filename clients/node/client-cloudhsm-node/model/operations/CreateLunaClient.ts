import { CreateLunaClientInput } from "../shapes/CreateLunaClientInput";
import { CreateLunaClientOutput } from "../shapes/CreateLunaClientOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
