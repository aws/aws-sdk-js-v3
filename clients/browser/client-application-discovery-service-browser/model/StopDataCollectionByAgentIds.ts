import { StopDataCollectionByAgentIdsInput } from "./StopDataCollectionByAgentIdsInput";
import { StopDataCollectionByAgentIdsOutput } from "./StopDataCollectionByAgentIdsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
