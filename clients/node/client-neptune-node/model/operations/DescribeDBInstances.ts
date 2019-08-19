import { DescribeDBInstancesInput } from "../shapes/DescribeDBInstancesInput";
import { DescribeDBInstancesOutput } from "../shapes/DescribeDBInstancesOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBInstancesInput
  },
  output: {
    shape: DescribeDBInstancesOutput,
    resultWrapper: "DescribeDBInstancesResult"
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    }
  ]
};
