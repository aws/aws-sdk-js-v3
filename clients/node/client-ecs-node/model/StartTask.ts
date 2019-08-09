import { StartTaskInput } from "./StartTaskInput";
import { StartTaskOutput } from "./StartTaskOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartTaskInput
  },
  output: {
    shape: StartTaskOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClusterNotFoundException
    }
  ]
};
