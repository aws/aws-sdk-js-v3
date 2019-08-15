import { GetConfigInput } from "../shapes/GetConfigInput";
import { GetConfigOutput } from "../shapes/GetConfigOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConfigInput
  },
  output: {
    shape: GetConfigOutput
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
