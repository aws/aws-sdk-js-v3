import { CopyDBParameterGroupInput } from "../shapes/CopyDBParameterGroupInput";
import { CopyDBParameterGroupOutput } from "../shapes/CopyDBParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { DBParameterGroupAlreadyExistsFault } from "../shapes/DBParameterGroupAlreadyExistsFault";
import { DBParameterGroupQuotaExceededFault } from "../shapes/DBParameterGroupQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyDBParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyDBParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyDBParameterGroupInput
  },
  output: {
    shape: CopyDBParameterGroupOutput,
    resultWrapper: "CopyDBParameterGroupResult"
  },
  errors: [
    {
      shape: DBParameterGroupNotFoundFault
    },
    {
      shape: DBParameterGroupAlreadyExistsFault
    },
    {
      shape: DBParameterGroupQuotaExceededFault
    }
  ]
};
