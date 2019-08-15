import { RemoveRoleFromDBInstanceInput } from "../shapes/RemoveRoleFromDBInstanceInput";
import { RemoveRoleFromDBInstanceOutput } from "../shapes/RemoveRoleFromDBInstanceOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { DBInstanceRoleNotFoundFault } from "../shapes/DBInstanceRoleNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
