import { ResumeSessionInput } from "./ResumeSessionInput";
import { ResumeSessionOutput } from "./ResumeSessionOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResumeSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResumeSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResumeSessionInput
  },
  output: {
    shape: ResumeSessionOutput
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
