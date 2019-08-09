import { UpdateReplicationJobInput } from "./UpdateReplicationJobInput";
import { UpdateReplicationJobOutput } from "./UpdateReplicationJobOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { ServerCannotBeReplicatedException } from "./ServerCannotBeReplicatedException";
import { ReplicationJobNotFoundException } from "./ReplicationJobNotFoundException";
import { InternalError } from "./InternalError";
import { TemporarilyUnavailableException } from "./TemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
