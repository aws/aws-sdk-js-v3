import { ModifyReplicationSubnetGroupInput } from "../shapes/ModifyReplicationSubnetGroupInput";
import { ModifyReplicationSubnetGroupOutput } from "../shapes/ModifyReplicationSubnetGroupOutput";
import { AccessDeniedFault } from "../shapes/AccessDeniedFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { SubnetAlreadyInUse } from "../shapes/SubnetAlreadyInUse";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyReplicationSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyReplicationSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyReplicationSubnetGroupInput
  },
  output: {
    shape: ModifyReplicationSubnetGroupOutput
  },
  errors: [
    {
      shape: AccessDeniedFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: ResourceQuotaExceededFault
    },
    {
      shape: SubnetAlreadyInUse
    },
    {
      shape: ReplicationSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidSubnet
    }
  ]
};
