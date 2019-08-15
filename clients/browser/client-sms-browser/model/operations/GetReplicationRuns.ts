import { GetReplicationRunsInput } from "../shapes/GetReplicationRunsInput";
import { GetReplicationRunsOutput } from "../shapes/GetReplicationRunsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
