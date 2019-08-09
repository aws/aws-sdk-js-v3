import { ModifyDBClusterEndpointInput } from "./ModifyDBClusterEndpointInput";
import { ModifyDBClusterEndpointOutput } from "./ModifyDBClusterEndpointOutput";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBClusterEndpointStateFault } from "./InvalidDBClusterEndpointStateFault";
import { DBClusterEndpointNotFoundFault } from "./DBClusterEndpointNotFoundFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyDBClusterEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBClusterEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBClusterEndpointInput
  },
  output: {
    shape: ModifyDBClusterEndpointOutput,
    resultWrapper: "ModifyDBClusterEndpointResult"
  },
  errors: [
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBClusterEndpointStateFault
    },
    {
      shape: DBClusterEndpointNotFoundFault
    },
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: InvalidDBInstanceStateFault
    }
  ]
};
