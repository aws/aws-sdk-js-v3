import { StartActivityStreamInput } from "../shapes/StartActivityStreamInput";
import { StartActivityStreamOutput } from "../shapes/StartActivityStreamOutput";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartActivityStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartActivityStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartActivityStreamInput
  },
  output: {
    shape: StartActivityStreamOutput,
    resultWrapper: "StartActivityStreamResult"
  },
  errors: [
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
