import { LaunchAppInput } from "../shapes/LaunchAppInput";
import { LaunchAppOutput } from "../shapes/LaunchAppOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
