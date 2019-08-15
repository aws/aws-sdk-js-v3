import { StartOnDemandReplicationRunInput } from "../shapes/StartOnDemandReplicationRunInput";
import { StartOnDemandReplicationRunOutput } from "../shapes/StartOnDemandReplicationRunOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ReplicationRunLimitExceededException } from "../shapes/ReplicationRunLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartOnDemandReplicationRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartOnDemandReplicationRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartOnDemandReplicationRunInput
  },
  output: {
    shape: StartOnDemandReplicationRunOutput
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
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ReplicationRunLimitExceededException
    }
  ]
};
