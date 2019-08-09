import { CreateClusterParameterGroupInput } from "./CreateClusterParameterGroupInput";
import { CreateClusterParameterGroupOutput } from "./CreateClusterParameterGroupOutput";
import { ClusterParameterGroupQuotaExceededFault } from "./ClusterParameterGroupQuotaExceededFault";
import { ClusterParameterGroupAlreadyExistsFault } from "./ClusterParameterGroupAlreadyExistsFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterParameterGroupInput
  },
  output: {
    shape: CreateClusterParameterGroupOutput,
    resultWrapper: "CreateClusterParameterGroupResult"
  },
  errors: [
    {
      shape: ClusterParameterGroupQuotaExceededFault
    },
    {
      shape: ClusterParameterGroupAlreadyExistsFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
