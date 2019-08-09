import { StopTaskInput } from "./StopTaskInput";
import { StopTaskOutput } from "./StopTaskOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopTaskInput
  },
  output: {
    shape: StopTaskOutput
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
