import { StopTaskInput } from "../shapes/StopTaskInput";
import { StopTaskOutput } from "../shapes/StopTaskOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
