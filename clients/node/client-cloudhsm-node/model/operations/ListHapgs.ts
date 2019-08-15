import { ListHapgsInput } from "../shapes/ListHapgsInput";
import { ListHapgsOutput } from "../shapes/ListHapgsOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
