import { DescribeDBInstanceAutomatedBackupsInput } from "../shapes/DescribeDBInstanceAutomatedBackupsInput";
import { DescribeDBInstanceAutomatedBackupsOutput } from "../shapes/DescribeDBInstanceAutomatedBackupsOutput";
import { DBInstanceAutomatedBackupNotFoundFault } from "../shapes/DBInstanceAutomatedBackupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBInstanceAutomatedBackups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBInstanceAutomatedBackups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBInstanceAutomatedBackupsInput
  },
  output: {
    shape: DescribeDBInstanceAutomatedBackupsOutput,
    resultWrapper: "DescribeDBInstanceAutomatedBackupsResult"
  },
  errors: [
    {
      shape: DBInstanceAutomatedBackupNotFoundFault
    }
  ]
};
