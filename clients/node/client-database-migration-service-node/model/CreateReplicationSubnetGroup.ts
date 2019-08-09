import { CreateReplicationSubnetGroupInput } from "./CreateReplicationSubnetGroupInput";
import { CreateReplicationSubnetGroupOutput } from "./CreateReplicationSubnetGroupOutput";
import { AccessDeniedFault } from "./AccessDeniedFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "./ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
