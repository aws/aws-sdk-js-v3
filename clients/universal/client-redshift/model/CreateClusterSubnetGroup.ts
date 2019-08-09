import { CreateClusterSubnetGroupInput } from "./CreateClusterSubnetGroupInput";
import { CreateClusterSubnetGroupOutput } from "./CreateClusterSubnetGroupOutput";
import { ClusterSubnetGroupAlreadyExistsFault } from "./ClusterSubnetGroupAlreadyExistsFault";
import { ClusterSubnetGroupQuotaExceededFault } from "./ClusterSubnetGroupQuotaExceededFault";
import { ClusterSubnetQuotaExceededFault } from "./ClusterSubnetQuotaExceededFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateClusterSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateClusterSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterSubnetGroupInput
  },
  output: {
    shape: CreateClusterSubnetGroupOutput,
    resultWrapper: "CreateClusterSubnetGroupResult"
  },
  errors: [
    {
      shape: ClusterSubnetGroupAlreadyExistsFault
    },
    {
      shape: ClusterSubnetGroupQuotaExceededFault
    },
    {
      shape: ClusterSubnetQuotaExceededFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    },
    {
      shape: DependentServiceRequestThrottlingFault
    }
  ]
};
