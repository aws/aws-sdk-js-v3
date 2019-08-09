import { CopyDBClusterParameterGroupInput } from "./CopyDBClusterParameterGroupInput";
import { CopyDBClusterParameterGroupOutput } from "./CopyDBClusterParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CopyDBClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyDBClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyDBClusterParameterGroupInput
  },
  output: {
    shape: CopyDBClusterParameterGroupOutput,
    resultWrapper: "CopyDBClusterParameterGroupResult"
  },
  errors: [
    {
      shape: DBParameterGroupNotFoundFault
    },
    {
      shape: DBParameterGroupQuotaExceededFault
    },
    {
      shape: DBParameterGroupAlreadyExistsFault
    }
  ]
};
