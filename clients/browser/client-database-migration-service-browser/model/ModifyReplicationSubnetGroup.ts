import { ModifyReplicationSubnetGroupInput } from "./ModifyReplicationSubnetGroupInput";
import { ModifyReplicationSubnetGroupOutput } from "./ModifyReplicationSubnetGroupOutput";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { SubnetAlreadyInUse } from "./SubnetAlreadyInUse";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "./ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
