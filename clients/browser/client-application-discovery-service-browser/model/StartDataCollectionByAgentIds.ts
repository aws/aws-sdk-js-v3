import { StartDataCollectionByAgentIdsInput } from "./StartDataCollectionByAgentIdsInput";
import { StartDataCollectionByAgentIdsOutput } from "./StartDataCollectionByAgentIdsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
