import { CreateReplicationJobInput } from "./CreateReplicationJobInput";
import { CreateReplicationJobOutput } from "./CreateReplicationJobOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerCannotBeReplicatedException } from "./ServerCannotBeReplicatedException";
import { ReplicationJobAlreadyExistsException } from "./ReplicationJobAlreadyExistsException";
import { NoConnectorsAvailableException } from "./NoConnectorsAvailableException";
import { InternalError } from "./InternalError";
import { TemporarilyUnavailableException } from "./TemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateReplicationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReplicationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReplicationJobInput
  },
  output: {
    shape: CreateReplicationJobOutput
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
      shape: ServerCannotBeReplicatedException
    },
    {
      shape: ReplicationJobAlreadyExistsException
    },
    {
      shape: NoConnectorsAvailableException
    },
    {
      shape: InternalError
    },
    {
      shape: TemporarilyUnavailableException
    }
  ]
};
