import { PromoteReadReplicaInput } from "../shapes/PromoteReadReplicaInput";
import { PromoteReadReplicaOutput } from "../shapes/PromoteReadReplicaOutput";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PromoteReadReplica: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PromoteReadReplica",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PromoteReadReplicaInput
  },
  output: {
    shape: PromoteReadReplicaOutput,
    resultWrapper: "PromoteReadReplicaResult"
  },
  errors: [
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: DBInstanceNotFoundFault
    }
  ]
};
