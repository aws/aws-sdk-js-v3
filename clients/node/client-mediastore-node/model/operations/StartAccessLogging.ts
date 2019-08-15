import { StartAccessLoggingInput } from "../shapes/StartAccessLoggingInput";
import { StartAccessLoggingOutput } from "../shapes/StartAccessLoggingOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartAccessLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartAccessLogging",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartAccessLoggingInput
  },
  output: {
    shape: StartAccessLoggingOutput
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
