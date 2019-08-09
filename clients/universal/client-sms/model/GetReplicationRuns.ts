import { GetReplicationRunsInput } from "./GetReplicationRunsInput";
import { GetReplicationRunsOutput } from "./GetReplicationRunsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetReplicationRuns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReplicationRuns",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetReplicationRunsInput
  },
  output: {
    shape: GetReplicationRunsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: UnauthorizedOperationException
    }
  ]
};
