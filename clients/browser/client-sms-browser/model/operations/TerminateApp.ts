import { TerminateAppInput } from "../shapes/TerminateAppInput";
import { TerminateAppOutput } from "../shapes/TerminateAppOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
