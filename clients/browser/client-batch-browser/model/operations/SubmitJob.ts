import { SubmitJobInput } from "../shapes/SubmitJobInput";
import { SubmitJobOutput } from "../shapes/SubmitJobOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SubmitJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SubmitJob",
  http: {
    method: "POST",
    requestUri: "/v1/submitjob"
  },
  input: {
    shape: SubmitJobInput
  },
  output: {
    shape: SubmitJobOutput
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
