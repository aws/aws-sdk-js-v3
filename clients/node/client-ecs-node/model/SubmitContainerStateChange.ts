import { SubmitContainerStateChangeInput } from "./SubmitContainerStateChangeInput";
import { SubmitContainerStateChangeOutput } from "./SubmitContainerStateChangeOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SubmitContainerStateChange: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SubmitContainerStateChange",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SubmitContainerStateChangeInput
  },
  output: {
    shape: SubmitContainerStateChangeOutput
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
