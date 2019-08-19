import { TerminateJobInput } from "../shapes/TerminateJobInput";
import { TerminateJobOutput } from "../shapes/TerminateJobOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TerminateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateJob",
  http: {
    method: "POST",
    requestUri: "/v1/terminatejob"
  },
  input: {
    shape: TerminateJobInput
  },
  output: {
    shape: TerminateJobOutput
  },
  errors: [
    {
      shape: ClientException
    },
    {
      shape: ServerException
    }
  ]
};
