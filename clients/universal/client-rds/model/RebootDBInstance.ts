import { RebootDBInstanceInput } from "./RebootDBInstanceInput";
import { RebootDBInstanceOutput } from "./RebootDBInstanceOutput";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
