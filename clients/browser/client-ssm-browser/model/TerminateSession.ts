import { TerminateSessionInput } from "./TerminateSessionInput";
import { TerminateSessionOutput } from "./TerminateSessionOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TerminateSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateSessionInput
  },
  output: {
    shape: TerminateSessionOutput
  },
  errors: [
    {
      shape: DoesNotExistException
    },
    {
      shape: InternalServerError
    }
  ]
};
