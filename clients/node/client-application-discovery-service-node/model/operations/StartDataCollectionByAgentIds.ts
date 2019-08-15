import { StartDataCollectionByAgentIdsInput } from "../shapes/StartDataCollectionByAgentIdsInput";
import { StartDataCollectionByAgentIdsOutput } from "../shapes/StartDataCollectionByAgentIdsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDataCollectionByAgentIds: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDataCollectionByAgentIds",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDataCollectionByAgentIdsInput
  },
  output: {
    shape: StartDataCollectionByAgentIdsOutput
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
