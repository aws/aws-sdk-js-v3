import { GetReplicationJobsInput } from "../shapes/GetReplicationJobsInput";
import { GetReplicationJobsOutput } from "../shapes/GetReplicationJobsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
