import { StopDataCollectionByAgentIdsInput } from "../shapes/StopDataCollectionByAgentIdsInput";
import { StopDataCollectionByAgentIdsOutput } from "../shapes/StopDataCollectionByAgentIdsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopDataCollectionByAgentIds: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopDataCollectionByAgentIds",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopDataCollectionByAgentIdsInput
  },
  output: {
    shape: StopDataCollectionByAgentIdsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
