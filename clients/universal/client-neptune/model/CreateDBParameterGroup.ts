import { CreateDBParameterGroupInput } from "./CreateDBParameterGroupInput";
import { CreateDBParameterGroupOutput } from "./CreateDBParameterGroupOutput";
import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
