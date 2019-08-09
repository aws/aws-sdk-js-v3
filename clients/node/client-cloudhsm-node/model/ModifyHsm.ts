import { ModifyHsmInput } from "./ModifyHsmInput";
import { ModifyHsmOutput } from "./ModifyHsmOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
