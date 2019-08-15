import { StopActivityStreamInput } from "../shapes/StopActivityStreamInput";
import { StopActivityStreamOutput } from "../shapes/StopActivityStreamOutput";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
