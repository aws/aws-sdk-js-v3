import { AddRoleToDBInstanceInput } from "../shapes/AddRoleToDBInstanceInput";
import { AddRoleToDBInstanceOutput } from "../shapes/AddRoleToDBInstanceOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { DBInstanceRoleAlreadyExistsFault } from "../shapes/DBInstanceRoleAlreadyExistsFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBInstanceRoleQuotaExceededFault } from "../shapes/DBInstanceRoleQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddRoleToDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddRoleToDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddRoleToDBInstanceInput
  },
  output: {
    shape: AddRoleToDBInstanceOutput
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: DBInstanceRoleAlreadyExistsFault
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: DBInstanceRoleQuotaExceededFault
    }
  ]
};
