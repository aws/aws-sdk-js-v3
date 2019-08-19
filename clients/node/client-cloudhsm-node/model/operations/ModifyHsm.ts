import { ModifyHsmInput } from "../shapes/ModifyHsmInput";
import { ModifyHsmOutput } from "../shapes/ModifyHsmOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyHsm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyHsm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyHsmInput
  },
  output: {
    shape: ModifyHsmOutput
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
