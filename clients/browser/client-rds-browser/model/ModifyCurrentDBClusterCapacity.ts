import { ModifyCurrentDBClusterCapacityInput } from "./ModifyCurrentDBClusterCapacityInput";
import { ModifyCurrentDBClusterCapacityOutput } from "./ModifyCurrentDBClusterCapacityOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBClusterCapacityFault } from "./InvalidDBClusterCapacityFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyCurrentDBClusterCapacity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyCurrentDBClusterCapacity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyCurrentDBClusterCapacityInput
  },
  output: {
    shape: ModifyCurrentDBClusterCapacityOutput,
    resultWrapper: "ModifyCurrentDBClusterCapacityResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBClusterCapacityFault
    }
  ]
};
