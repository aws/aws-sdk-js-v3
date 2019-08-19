import { CreateHapgInput } from "../shapes/CreateHapgInput";
import { CreateHapgOutput } from "../shapes/CreateHapgOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
