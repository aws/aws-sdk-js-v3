import { ModifyCurrentDBClusterCapacityInput } from "../shapes/ModifyCurrentDBClusterCapacityInput";
import { ModifyCurrentDBClusterCapacityOutput } from "../shapes/ModifyCurrentDBClusterCapacityOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBClusterCapacityFault } from "../shapes/InvalidDBClusterCapacityFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
