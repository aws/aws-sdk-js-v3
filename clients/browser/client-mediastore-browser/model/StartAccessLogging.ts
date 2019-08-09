import { StartAccessLoggingInput } from "./StartAccessLoggingInput";
import { StartAccessLoggingOutput } from "./StartAccessLoggingOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
