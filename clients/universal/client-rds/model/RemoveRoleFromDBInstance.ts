import { RemoveRoleFromDBInstanceInput } from "./RemoveRoleFromDBInstanceInput";
import { RemoveRoleFromDBInstanceOutput } from "./RemoveRoleFromDBInstanceOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBInstanceRoleNotFoundFault } from "./DBInstanceRoleNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveRoleFromDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveRoleFromDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveRoleFromDBInstanceInput
  },
  output: {
    shape: RemoveRoleFromDBInstanceOutput
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: DBInstanceRoleNotFoundFault
    },
    {
      shape: InvalidDBInstanceStateFault
    }
  ]
};
