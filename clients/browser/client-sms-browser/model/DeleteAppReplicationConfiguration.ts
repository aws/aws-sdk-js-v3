import { DeleteAppReplicationConfigurationInput } from "./DeleteAppReplicationConfigurationInput";
import { DeleteAppReplicationConfigurationOutput } from "./DeleteAppReplicationConfigurationOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAppReplicationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAppReplicationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAppReplicationConfigurationInput
  },
  output: {
    shape: DeleteAppReplicationConfigurationOutput
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
