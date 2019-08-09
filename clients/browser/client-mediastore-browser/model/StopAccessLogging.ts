import { StopAccessLoggingInput } from "./StopAccessLoggingInput";
import { StopAccessLoggingOutput } from "./StopAccessLoggingOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
