import { ModifyClusterSubnetGroupInput } from "../shapes/ModifyClusterSubnetGroupInput";
import { ModifyClusterSubnetGroupOutput } from "../shapes/ModifyClusterSubnetGroupOutput";
import { ClusterSubnetGroupNotFoundFault } from "../shapes/ClusterSubnetGroupNotFoundFault";
import { ClusterSubnetQuotaExceededFault } from "../shapes/ClusterSubnetQuotaExceededFault";
import { SubnetAlreadyInUse } from "../shapes/SubnetAlreadyInUse";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
