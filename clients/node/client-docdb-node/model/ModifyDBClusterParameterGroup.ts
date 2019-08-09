import { ModifyDBClusterParameterGroupInput } from "./ModifyDBClusterParameterGroupInput";
import { ModifyDBClusterParameterGroupOutput } from "./ModifyDBClusterParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyDBClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBClusterParameterGroupInput
  },
  output: {
    shape: ModifyDBClusterParameterGroupOutput,
    resultWrapper: "ModifyDBClusterParameterGroupResult"
  },
  errors: [
    {
      shape: DBParameterGroupNotFoundFault
    },
    {
      shape: InvalidDBParameterGroupStateFault
    }
  ]
};
