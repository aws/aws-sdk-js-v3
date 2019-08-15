import { StopAccessLoggingInput } from "../shapes/StopAccessLoggingInput";
import { StopAccessLoggingOutput } from "../shapes/StopAccessLoggingOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopAccessLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopAccessLogging",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopAccessLoggingInput
  },
  output: {
    shape: StopAccessLoggingOutput
  },
  errors: [
    {
      shape: ContainerInUseException
    },
    {
      shape: ContainerNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
