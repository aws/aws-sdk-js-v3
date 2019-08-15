import { DeleteReplicationJobInput } from "../shapes/DeleteReplicationJobInput";
import { DeleteReplicationJobOutput } from "../shapes/DeleteReplicationJobOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ReplicationJobNotFoundException } from "../shapes/ReplicationJobNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteReplicationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReplicationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReplicationJobInput
  },
  output: {
    shape: DeleteReplicationJobOutput
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
      shape: ReplicationJobNotFoundException
    }
  ]
};
