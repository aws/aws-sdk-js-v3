import { ModifyHapgInput } from "../shapes/ModifyHapgInput";
import { ModifyHapgOutput } from "../shapes/ModifyHapgOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyHapg: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyHapg",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyHapgInput
  },
  output: {
    shape: ModifyHapgOutput
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
