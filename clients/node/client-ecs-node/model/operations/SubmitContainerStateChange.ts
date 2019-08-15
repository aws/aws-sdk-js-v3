import { SubmitContainerStateChangeInput } from "../shapes/SubmitContainerStateChangeInput";
import { SubmitContainerStateChangeOutput } from "../shapes/SubmitContainerStateChangeOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
