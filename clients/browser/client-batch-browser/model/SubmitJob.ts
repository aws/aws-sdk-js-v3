import { SubmitJobInput } from "./SubmitJobInput";
import { SubmitJobOutput } from "./SubmitJobOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
