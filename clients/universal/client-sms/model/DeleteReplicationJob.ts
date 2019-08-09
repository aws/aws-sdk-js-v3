import { DeleteReplicationJobInput } from "./DeleteReplicationJobInput";
import { DeleteReplicationJobOutput } from "./DeleteReplicationJobOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ReplicationJobNotFoundException } from "./ReplicationJobNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
