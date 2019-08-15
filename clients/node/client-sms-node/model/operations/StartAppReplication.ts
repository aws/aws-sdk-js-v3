import { StartAppReplicationInput } from "../shapes/StartAppReplicationInput";
import { StartAppReplicationOutput } from "../shapes/StartAppReplicationOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartAppReplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartAppReplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartAppReplicationInput
  },
  output: {
    shape: StartAppReplicationOutput
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
