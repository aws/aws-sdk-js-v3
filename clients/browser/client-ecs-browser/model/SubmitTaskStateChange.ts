import { SubmitTaskStateChangeInput } from "./SubmitTaskStateChangeInput";
import { SubmitTaskStateChangeOutput } from "./SubmitTaskStateChangeOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
