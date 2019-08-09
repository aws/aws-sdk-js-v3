import { ModifyHapgInput } from "./ModifyHapgInput";
import { ModifyHapgOutput } from "./ModifyHapgOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
