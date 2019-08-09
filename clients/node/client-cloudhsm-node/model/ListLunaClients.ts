import { ListLunaClientsInput } from "./ListLunaClientsInput";
import { ListLunaClientsOutput } from "./ListLunaClientsOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
