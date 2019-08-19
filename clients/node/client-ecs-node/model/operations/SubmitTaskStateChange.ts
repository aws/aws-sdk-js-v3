import { SubmitTaskStateChangeInput } from "../shapes/SubmitTaskStateChangeInput";
import { SubmitTaskStateChangeOutput } from "../shapes/SubmitTaskStateChangeOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SubmitTaskStateChange: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SubmitTaskStateChange",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SubmitTaskStateChangeInput
  },
  output: {
    shape: SubmitTaskStateChangeOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
