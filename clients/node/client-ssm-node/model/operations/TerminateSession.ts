import { TerminateSessionInput } from "../shapes/TerminateSessionInput";
import { TerminateSessionOutput } from "../shapes/TerminateSessionOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
