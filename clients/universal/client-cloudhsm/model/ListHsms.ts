import { ListHsmsInput } from "./ListHsmsInput";
import { ListHsmsOutput } from "./ListHsmsOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
