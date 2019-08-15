import { ListLunaClientsInput } from "../shapes/ListLunaClientsInput";
import { ListLunaClientsOutput } from "../shapes/ListLunaClientsOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLunaClients: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLunaClients",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLunaClientsInput
  },
  output: {
    shape: ListLunaClientsOutput
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
