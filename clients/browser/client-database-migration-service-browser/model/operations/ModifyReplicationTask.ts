import { ModifyReplicationTaskInput } from "../shapes/ModifyReplicationTaskInput";
import { ModifyReplicationTaskOutput } from "../shapes/ModifyReplicationTaskOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyReplicationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyReplicationTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyReplicationTaskInput
  },
  output: {
    shape: ModifyReplicationTaskOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
