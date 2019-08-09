import { DeleteDBClusterParameterGroupInput } from "./DeleteDBClusterParameterGroupInput";
import { DeleteDBClusterParameterGroupOutput } from "./DeleteDBClusterParameterGroupOutput";
import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDBClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBClusterParameterGroupInput
  },
  output: {
    shape: DeleteDBClusterParameterGroupOutput
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
