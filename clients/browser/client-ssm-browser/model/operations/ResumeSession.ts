import { ResumeSessionInput } from "../shapes/ResumeSessionInput";
import { ResumeSessionOutput } from "../shapes/ResumeSessionOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
