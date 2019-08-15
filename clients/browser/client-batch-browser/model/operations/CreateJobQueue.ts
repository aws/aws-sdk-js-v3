import { CreateJobQueueInput } from "../shapes/CreateJobQueueInput";
import { CreateJobQueueOutput } from "../shapes/CreateJobQueueOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateJobQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateJobQueue",
  http: {
    method: "POST",
    requestUri: "/v1/createjobqueue"
  },
  input: {
    shape: CreateJobQueueInput
  },
  output: {
    shape: CreateJobQueueOutput
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
