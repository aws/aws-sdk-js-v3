import { DeleteAppLaunchConfigurationInput } from "../shapes/DeleteAppLaunchConfigurationInput";
import { DeleteAppLaunchConfigurationOutput } from "../shapes/DeleteAppLaunchConfigurationOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAppLaunchConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAppLaunchConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAppLaunchConfigurationInput
  },
  output: {
    shape: DeleteAppLaunchConfigurationOutput
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
