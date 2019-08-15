import { CreateClusterSecurityGroupInput } from "../shapes/CreateClusterSecurityGroupInput";
import { CreateClusterSecurityGroupOutput } from "../shapes/CreateClusterSecurityGroupOutput";
import { ClusterSecurityGroupAlreadyExistsFault } from "../shapes/ClusterSecurityGroupAlreadyExistsFault";
import { ClusterSecurityGroupQuotaExceededFault } from "../shapes/ClusterSecurityGroupQuotaExceededFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateClusterSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateClusterSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterSecurityGroupInput
  },
  output: {
    shape: CreateClusterSecurityGroupOutput,
    resultWrapper: "CreateClusterSecurityGroupResult"
  },
  errors: [
    {
      shape: ClusterSecurityGroupAlreadyExistsFault
    },
    {
      shape: ClusterSecurityGroupQuotaExceededFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
