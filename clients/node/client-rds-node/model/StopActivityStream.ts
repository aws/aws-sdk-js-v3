import { StopActivityStreamInput } from "./StopActivityStreamInput";
import { StopActivityStreamOutput } from "./StopActivityStreamOutput";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopActivityStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopActivityStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopActivityStreamInput
  },
  output: {
    shape: StopActivityStreamOutput,
    resultWrapper: "StopActivityStreamResult"
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
    }
  ]
};
