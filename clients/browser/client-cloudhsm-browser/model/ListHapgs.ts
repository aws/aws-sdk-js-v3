import { ListHapgsInput } from "./ListHapgsInput";
import { ListHapgsOutput } from "./ListHapgsOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListHapgs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHapgs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListHapgsInput
  },
  output: {
    shape: ListHapgsOutput
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
