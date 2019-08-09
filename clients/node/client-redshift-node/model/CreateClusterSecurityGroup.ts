import { CreateClusterSecurityGroupInput } from "./CreateClusterSecurityGroupInput";
import { CreateClusterSecurityGroupOutput } from "./CreateClusterSecurityGroupOutput";
import { ClusterSecurityGroupAlreadyExistsFault } from "./ClusterSecurityGroupAlreadyExistsFault";
import { ClusterSecurityGroupQuotaExceededFault } from "./ClusterSecurityGroupQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
