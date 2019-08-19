import { CreateGlobalClusterInput } from "../shapes/CreateGlobalClusterInput";
import { CreateGlobalClusterOutput } from "../shapes/CreateGlobalClusterOutput";
import { GlobalClusterAlreadyExistsFault } from "../shapes/GlobalClusterAlreadyExistsFault";
import { GlobalClusterQuotaExceededFault } from "../shapes/GlobalClusterQuotaExceededFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGlobalCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGlobalCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGlobalClusterInput
  },
  output: {
    shape: CreateGlobalClusterOutput,
    resultWrapper: "CreateGlobalClusterResult"
  },
  errors: [
    {
      shape: GlobalClusterAlreadyExistsFault
    },
    {
      shape: GlobalClusterQuotaExceededFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: DBClusterNotFoundFault
    }
  ]
};
