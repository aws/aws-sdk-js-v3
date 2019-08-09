import { ModifyDBParameterGroupInput } from "./ModifyDBParameterGroupInput";
import { ModifyDBParameterGroupOutput } from "./ModifyDBParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyDBParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBParameterGroupInput
  },
  output: {
    shape: ModifyDBParameterGroupOutput,
    resultWrapper: "ModifyDBParameterGroupResult"
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
