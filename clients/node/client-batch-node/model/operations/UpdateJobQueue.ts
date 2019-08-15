import { UpdateJobQueueInput } from "../shapes/UpdateJobQueueInput";
import { UpdateJobQueueOutput } from "../shapes/UpdateJobQueueOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateJobQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJobQueue",
  http: {
    method: "POST",
    requestUri: "/v1/updatejobqueue"
  },
  input: {
    shape: UpdateJobQueueInput
  },
  output: {
    shape: UpdateJobQueueOutput
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
