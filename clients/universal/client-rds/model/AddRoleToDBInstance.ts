import { AddRoleToDBInstanceInput } from "./AddRoleToDBInstanceInput";
import { AddRoleToDBInstanceOutput } from "./AddRoleToDBInstanceOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBInstanceRoleAlreadyExistsFault } from "./DBInstanceRoleAlreadyExistsFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceRoleQuotaExceededFault } from "./DBInstanceRoleQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
