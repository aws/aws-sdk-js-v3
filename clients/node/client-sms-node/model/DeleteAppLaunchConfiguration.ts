import { DeleteAppLaunchConfigurationInput } from "./DeleteAppLaunchConfigurationInput";
import { DeleteAppLaunchConfigurationOutput } from "./DeleteAppLaunchConfigurationOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
