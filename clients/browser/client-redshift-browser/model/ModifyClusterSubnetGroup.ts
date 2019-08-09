import { ModifyClusterSubnetGroupInput } from "./ModifyClusterSubnetGroupInput";
import { ModifyClusterSubnetGroupOutput } from "./ModifyClusterSubnetGroupOutput";
import { ClusterSubnetGroupNotFoundFault } from "./ClusterSubnetGroupNotFoundFault";
import { ClusterSubnetQuotaExceededFault } from "./ClusterSubnetQuotaExceededFault";
import { SubnetAlreadyInUse } from "./SubnetAlreadyInUse";
import { InvalidSubnet } from "./InvalidSubnet";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClusterSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClusterSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterSubnetGroupInput
  },
  output: {
    shape: ModifyClusterSubnetGroupOutput,
    resultWrapper: "ModifyClusterSubnetGroupResult"
  },
  errors: [
    {
      shape: ClusterSubnetGroupNotFoundFault
    },
    {
      shape: ClusterSubnetQuotaExceededFault
    },
    {
      shape: SubnetAlreadyInUse
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: DependentServiceRequestThrottlingFault
    }
  ]
};
