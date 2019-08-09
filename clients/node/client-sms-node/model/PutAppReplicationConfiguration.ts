import { PutAppReplicationConfigurationInput } from "./PutAppReplicationConfigurationInput";
import { PutAppReplicationConfigurationOutput } from "./PutAppReplicationConfigurationOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutAppReplicationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAppReplicationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAppReplicationConfigurationInput
  },
  output: {
    shape: PutAppReplicationConfigurationOutput
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
