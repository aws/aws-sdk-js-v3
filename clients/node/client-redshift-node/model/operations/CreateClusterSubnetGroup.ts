import { CreateClusterSubnetGroupInput } from "../shapes/CreateClusterSubnetGroupInput";
import { CreateClusterSubnetGroupOutput } from "../shapes/CreateClusterSubnetGroupOutput";
import { ClusterSubnetGroupAlreadyExistsFault } from "../shapes/ClusterSubnetGroupAlreadyExistsFault";
import { ClusterSubnetGroupQuotaExceededFault } from "../shapes/ClusterSubnetGroupQuotaExceededFault";
import { ClusterSubnetQuotaExceededFault } from "../shapes/ClusterSubnetQuotaExceededFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
