import { UpdateJobQueueInput } from "./UpdateJobQueueInput";
import { UpdateJobQueueOutput } from "./UpdateJobQueueOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
