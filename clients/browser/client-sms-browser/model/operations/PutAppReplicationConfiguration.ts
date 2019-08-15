import { PutAppReplicationConfigurationInput } from "../shapes/PutAppReplicationConfigurationInput";
import { PutAppReplicationConfigurationOutput } from "../shapes/PutAppReplicationConfigurationOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
