import { GetReplicationJobsInput } from "./GetReplicationJobsInput";
import { GetReplicationJobsOutput } from "./GetReplicationJobsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetReplicationJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReplicationJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetReplicationJobsInput
  },
  output: {
    shape: GetReplicationJobsOutput
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
