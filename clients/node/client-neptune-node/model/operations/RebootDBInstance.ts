import { RebootDBInstanceInput } from "../shapes/RebootDBInstanceInput";
import { RebootDBInstanceOutput } from "../shapes/RebootDBInstanceOutput";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RebootDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootDBInstanceInput
  },
  output: {
    shape: RebootDBInstanceOutput,
    resultWrapper: "RebootDBInstanceResult"
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
