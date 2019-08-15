import { DescribeValidDBInstanceModificationsInput } from "../shapes/DescribeValidDBInstanceModificationsInput";
import { DescribeValidDBInstanceModificationsOutput } from "../shapes/DescribeValidDBInstanceModificationsOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeValidDBInstanceModifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeValidDBInstanceModifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeValidDBInstanceModificationsInput
  },
  output: {
    shape: DescribeValidDBInstanceModificationsOutput,
    resultWrapper: "DescribeValidDBInstanceModificationsResult"
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: InvalidDBInstanceStateFault
    }
  ]
};
