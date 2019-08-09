import { GetConfigInput } from "./GetConfigInput";
import { GetConfigOutput } from "./GetConfigOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
