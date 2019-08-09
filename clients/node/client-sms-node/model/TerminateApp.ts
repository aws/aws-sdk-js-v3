import { TerminateAppInput } from "./TerminateAppInput";
import { TerminateAppOutput } from "./TerminateAppOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TerminateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateAppInput
  },
  output: {
    shape: TerminateAppOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: InternalError
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
