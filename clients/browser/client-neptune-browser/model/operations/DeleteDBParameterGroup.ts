import { DeleteDBParameterGroupInput } from "../shapes/DeleteDBParameterGroupInput";
import { DeleteDBParameterGroupOutput } from "../shapes/DeleteDBParameterGroupOutput";
import { InvalidDBParameterGroupStateFault } from "../shapes/InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDBParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBParameterGroupInput
  },
  output: {
    shape: DeleteDBParameterGroupOutput
  },
  errors: [
    {
      shape: InvalidDBParameterGroupStateFault
    },
    {
      shape: DBParameterGroupNotFoundFault
    }
  ]
};
