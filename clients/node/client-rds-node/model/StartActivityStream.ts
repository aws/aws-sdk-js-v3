import { StartActivityStreamInput } from "./StartActivityStreamInput";
import { StartActivityStreamOutput } from "./StartActivityStreamOutput";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
