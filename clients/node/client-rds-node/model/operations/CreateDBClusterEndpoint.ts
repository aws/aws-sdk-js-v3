import { CreateDBClusterEndpointInput } from "../shapes/CreateDBClusterEndpointInput";
import { CreateDBClusterEndpointOutput } from "../shapes/CreateDBClusterEndpointOutput";
import { DBClusterEndpointQuotaExceededFault } from "../shapes/DBClusterEndpointQuotaExceededFault";
import { DBClusterEndpointAlreadyExistsFault } from "../shapes/DBClusterEndpointAlreadyExistsFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDBClusterEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBClusterEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBClusterEndpointInput
  },
  output: {
    shape: CreateDBClusterEndpointOutput,
    resultWrapper: "CreateDBClusterEndpointResult"
  },
  errors: [
    {
      shape: DBClusterEndpointQuotaExceededFault
    },
    {
      shape: DBClusterEndpointAlreadyExistsFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: InvalidDBInstanceStateFault
    }
  ]
};
