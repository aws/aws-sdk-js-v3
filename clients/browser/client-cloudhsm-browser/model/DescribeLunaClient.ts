import { DescribeLunaClientInput } from "./DescribeLunaClientInput";
import { DescribeLunaClientOutput } from "./DescribeLunaClientOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLunaClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLunaClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLunaClientInput
  },
  output: {
    shape: DescribeLunaClientOutput
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
