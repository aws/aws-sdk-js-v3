import { CopyDBClusterParameterGroupInput } from "../shapes/CopyDBClusterParameterGroupInput";
import { CopyDBClusterParameterGroupOutput } from "../shapes/CopyDBClusterParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { DBParameterGroupQuotaExceededFault } from "../shapes/DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "../shapes/DBParameterGroupAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
