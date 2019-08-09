import { StartOnDemandReplicationRunInput } from "./StartOnDemandReplicationRunInput";
import { StartOnDemandReplicationRunOutput } from "./StartOnDemandReplicationRunOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ReplicationRunLimitExceededException } from "./ReplicationRunLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
