import { CreateDBSnapshotInput } from "./CreateDBSnapshotInput";
import { CreateDBSnapshotOutput } from "./CreateDBSnapshotOutput";
import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
