import { ModifyDBParameterGroupInput } from "../shapes/ModifyDBParameterGroupInput";
import { ModifyDBParameterGroupOutput } from "../shapes/ModifyDBParameterGroupOutput";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { InvalidDBParameterGroupStateFault } from "../shapes/InvalidDBParameterGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
