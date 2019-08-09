import { CopyDBParameterGroupInput } from "./CopyDBParameterGroupInput";
import { CopyDBParameterGroupOutput } from "./CopyDBParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
