import { CancelJobInput } from "../shapes/CancelJobInput";
import { CancelJobOutput } from "../shapes/CancelJobOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelJob",
  http: {
    method: "POST",
    requestUri: "/v1/canceljob"
  },
  input: {
    shape: CancelJobInput
  },
  output: {
    shape: CancelJobOutput
  },
  errors: [
    {
      shape: ClientException
    },
    {
      shape: ServerException
    }
  ]
};
