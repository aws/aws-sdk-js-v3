import { ListHsmsInput } from "../shapes/ListHsmsInput";
import { ListHsmsOutput } from "../shapes/ListHsmsOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListHsms: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHsms",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListHsmsInput
  },
  output: {
    shape: ListHsmsOutput
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
