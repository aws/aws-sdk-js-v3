import { StopAppReplicationInput } from "./StopAppReplicationInput";
import { StopAppReplicationOutput } from "./StopAppReplicationOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
