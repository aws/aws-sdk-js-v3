import { GetAppReplicationConfigurationInput } from "./GetAppReplicationConfigurationInput";
import { GetAppReplicationConfigurationOutput } from "./GetAppReplicationConfigurationOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAppReplicationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAppReplicationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAppReplicationConfigurationInput
  },
  output: {
    shape: GetAppReplicationConfigurationOutput
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
