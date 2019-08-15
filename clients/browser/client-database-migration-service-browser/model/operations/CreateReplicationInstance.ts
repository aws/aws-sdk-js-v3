import { CreateReplicationInstanceInput } from "../shapes/CreateReplicationInstanceInput";
import { CreateReplicationInstanceOutput } from "../shapes/CreateReplicationInstanceOutput";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { InsufficientResourceCapacityFault } from "../shapes/InsufficientResourceCapacityFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
