import { CreateClusterParameterGroupInput } from "../shapes/CreateClusterParameterGroupInput";
import { CreateClusterParameterGroupOutput } from "../shapes/CreateClusterParameterGroupOutput";
import { ClusterParameterGroupQuotaExceededFault } from "../shapes/ClusterParameterGroupQuotaExceededFault";
import { ClusterParameterGroupAlreadyExistsFault } from "../shapes/ClusterParameterGroupAlreadyExistsFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
