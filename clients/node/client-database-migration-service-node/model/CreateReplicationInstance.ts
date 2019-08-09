import { CreateReplicationInstanceInput } from "./CreateReplicationInstanceInput";
import { CreateReplicationInstanceOutput } from "./CreateReplicationInstanceOutput";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { InsufficientResourceCapacityFault } from "./InsufficientResourceCapacityFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "./ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateReplicationInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReplicationInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReplicationInstanceInput
  },
  output: {
    shape: CreateReplicationInstanceOutput
  },
  errors: [
    {
      shape: AccessDeniedFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: InsufficientResourceCapacityFault
    },
    {
      shape: ResourceQuotaExceededFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: ReplicationSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
