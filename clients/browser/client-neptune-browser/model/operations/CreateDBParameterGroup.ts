import { CreateDBParameterGroupInput } from "../shapes/CreateDBParameterGroupInput";
import { CreateDBParameterGroupOutput } from "../shapes/CreateDBParameterGroupOutput";
import { DBParameterGroupQuotaExceededFault } from "../shapes/DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "../shapes/DBParameterGroupAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDBParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBParameterGroupInput
  },
  output: {
    shape: CreateDBParameterGroupOutput,
    resultWrapper: "CreateDBParameterGroupResult"
  },
  errors: [
    {
      shape: DBParameterGroupQuotaExceededFault
    },
    {
      shape: DBParameterGroupAlreadyExistsFault
    }
  ]
};
