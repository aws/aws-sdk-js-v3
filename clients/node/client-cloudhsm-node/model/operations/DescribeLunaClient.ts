import { DescribeLunaClientInput } from "../shapes/DescribeLunaClientInput";
import { DescribeLunaClientOutput } from "../shapes/DescribeLunaClientOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
