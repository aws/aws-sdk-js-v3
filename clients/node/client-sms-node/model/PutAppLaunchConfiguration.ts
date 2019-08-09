import { PutAppLaunchConfigurationInput } from "./PutAppLaunchConfigurationInput";
import { PutAppLaunchConfigurationOutput } from "./PutAppLaunchConfigurationOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutAppLaunchConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAppLaunchConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAppLaunchConfigurationInput
  },
  output: {
    shape: PutAppLaunchConfigurationOutput
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
