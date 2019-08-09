import { LaunchAppInput } from "./LaunchAppInput";
import { LaunchAppOutput } from "./LaunchAppOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const LaunchApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "LaunchApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: LaunchAppInput
  },
  output: {
    shape: LaunchAppOutput
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
