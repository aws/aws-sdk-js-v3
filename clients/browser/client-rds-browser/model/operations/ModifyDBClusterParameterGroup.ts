import { ModifyDBClusterParameterGroupInput } from "../shapes/ModifyDBClusterParameterGroupInput";
import { ModifyDBClusterParameterGroupOutput } from "../shapes/ModifyDBClusterParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { InvalidDBParameterGroupStateFault } from "../shapes/InvalidDBParameterGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
