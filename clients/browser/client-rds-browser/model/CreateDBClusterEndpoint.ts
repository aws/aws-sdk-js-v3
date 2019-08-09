import { CreateDBClusterEndpointInput } from "./CreateDBClusterEndpointInput";
import { CreateDBClusterEndpointOutput } from "./CreateDBClusterEndpointOutput";
import { DBClusterEndpointQuotaExceededFault } from "./DBClusterEndpointQuotaExceededFault";
import { DBClusterEndpointAlreadyExistsFault } from "./DBClusterEndpointAlreadyExistsFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
