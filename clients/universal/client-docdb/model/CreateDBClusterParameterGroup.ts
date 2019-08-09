import { CreateDBClusterParameterGroupInput } from "./CreateDBClusterParameterGroupInput";
import { CreateDBClusterParameterGroupOutput } from "./CreateDBClusterParameterGroupOutput";
import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDBClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBClusterParameterGroupInput
  },
  output: {
    shape: CreateDBClusterParameterGroupOutput,
    resultWrapper: "CreateDBClusterParameterGroupResult"
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
