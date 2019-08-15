import { DeleteJobQueueInput } from "../shapes/DeleteJobQueueInput";
import { DeleteJobQueueOutput } from "../shapes/DeleteJobQueueOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteJobQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteJobQueue",
  http: {
    method: "POST",
    requestUri: "/v1/deletejobqueue"
  },
  input: {
    shape: DeleteJobQueueInput
  },
  output: {
    shape: DeleteJobQueueOutput
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
