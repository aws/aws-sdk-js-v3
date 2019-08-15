import { StartTaskInput } from "../shapes/StartTaskInput";
import { StartTaskOutput } from "../shapes/StartTaskOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
