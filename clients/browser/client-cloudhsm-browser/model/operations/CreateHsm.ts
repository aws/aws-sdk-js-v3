import { CreateHsmInput } from "../shapes/CreateHsmInput";
import { CreateHsmOutput } from "../shapes/CreateHsmOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
