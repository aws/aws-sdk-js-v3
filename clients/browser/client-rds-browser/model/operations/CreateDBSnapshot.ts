import { CreateDBSnapshotInput } from "../shapes/CreateDBSnapshotInput";
import { CreateDBSnapshotOutput } from "../shapes/CreateDBSnapshotOutput";
import { DBSnapshotAlreadyExistsFault } from "../shapes/DBSnapshotAlreadyExistsFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDBSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBSnapshotInput
  },
  output: {
    shape: CreateDBSnapshotOutput,
    resultWrapper: "CreateDBSnapshotResult"
  },
  errors: [
    {
      shape: DBSnapshotAlreadyExistsFault
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: SnapshotQuotaExceededFault
    }
  ]
};
