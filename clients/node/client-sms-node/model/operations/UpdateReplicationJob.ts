import { UpdateReplicationJobInput } from "../shapes/UpdateReplicationJobInput";
import { UpdateReplicationJobOutput } from "../shapes/UpdateReplicationJobOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { ServerCannotBeReplicatedException } from "../shapes/ServerCannotBeReplicatedException";
import { ReplicationJobNotFoundException } from "../shapes/ReplicationJobNotFoundException";
import { InternalError } from "../shapes/InternalError";
import { TemporarilyUnavailableException } from "../shapes/TemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateReplicationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateReplicationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateReplicationJobInput
  },
  output: {
    shape: UpdateReplicationJobOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: ServerCannotBeReplicatedException
    },
    {
      shape: ReplicationJobNotFoundException
    },
    {
      shape: InternalError
    },
    {
      shape: TemporarilyUnavailableException
    }
  ]
};
