import { CreateReplicationJobInput } from "../shapes/CreateReplicationJobInput";
import { CreateReplicationJobOutput } from "../shapes/CreateReplicationJobOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ServerCannotBeReplicatedException } from "../shapes/ServerCannotBeReplicatedException";
import { ReplicationJobAlreadyExistsException } from "../shapes/ReplicationJobAlreadyExistsException";
import { NoConnectorsAvailableException } from "../shapes/NoConnectorsAvailableException";
import { InternalError } from "../shapes/InternalError";
import { TemporarilyUnavailableException } from "../shapes/TemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
