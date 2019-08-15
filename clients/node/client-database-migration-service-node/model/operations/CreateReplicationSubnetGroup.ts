import { CreateReplicationSubnetGroupInput } from "../shapes/CreateReplicationSubnetGroupInput";
import { CreateReplicationSubnetGroupOutput } from "../shapes/CreateReplicationSubnetGroupOutput";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateReplicationSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReplicationSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReplicationSubnetGroupInput
  },
  output: {
    shape: CreateReplicationSubnetGroupOutput
  },
  errors: [
    {
      shape: AccessDeniedFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: ResourceQuotaExceededFault
    },
    {
      shape: ReplicationSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidSubnet
    }
  ]
};
