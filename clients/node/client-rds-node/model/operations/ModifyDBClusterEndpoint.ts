import { ModifyDBClusterEndpointInput } from "../shapes/ModifyDBClusterEndpointInput";
import { ModifyDBClusterEndpointOutput } from "../shapes/ModifyDBClusterEndpointOutput";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBClusterEndpointStateFault } from "../shapes/InvalidDBClusterEndpointStateFault";
import { DBClusterEndpointNotFoundFault } from "../shapes/DBClusterEndpointNotFoundFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
