import { ModifyLunaClientInput } from "../shapes/ModifyLunaClientInput";
import { ModifyLunaClientOutput } from "../shapes/ModifyLunaClientOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyLunaClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyLunaClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyLunaClientInput
  },
  output: {
    shape: ModifyLunaClientOutput
  },
  errors: [
    {
      shape: CloudHsmServiceException
    }
  ]
};
