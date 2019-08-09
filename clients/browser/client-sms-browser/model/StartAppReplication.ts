import { StartAppReplicationInput } from "./StartAppReplicationInput";
import { StartAppReplicationOutput } from "./StartAppReplicationOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
