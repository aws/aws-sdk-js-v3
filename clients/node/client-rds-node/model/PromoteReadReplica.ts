import { PromoteReadReplicaInput } from "./PromoteReadReplicaInput";
import { PromoteReadReplicaOutput } from "./PromoteReadReplicaOutput";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
