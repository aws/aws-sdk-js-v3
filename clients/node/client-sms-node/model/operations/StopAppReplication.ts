import { StopAppReplicationInput } from "../shapes/StopAppReplicationInput";
import { StopAppReplicationOutput } from "../shapes/StopAppReplicationOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopAppReplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopAppReplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopAppReplicationInput
  },
  output: {
    shape: StopAppReplicationOutput
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
