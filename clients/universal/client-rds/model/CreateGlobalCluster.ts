import { CreateGlobalClusterInput } from "./CreateGlobalClusterInput";
import { CreateGlobalClusterOutput } from "./CreateGlobalClusterOutput";
import { GlobalClusterAlreadyExistsFault } from "./GlobalClusterAlreadyExistsFault";
import { GlobalClusterQuotaExceededFault } from "./GlobalClusterQuotaExceededFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
