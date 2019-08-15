import { GetAppReplicationConfigurationInput } from "../shapes/GetAppReplicationConfigurationInput";
import { GetAppReplicationConfigurationOutput } from "../shapes/GetAppReplicationConfigurationOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
