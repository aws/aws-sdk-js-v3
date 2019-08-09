import { DescribeDBInstancesInput } from "./DescribeDBInstancesInput";
import { DescribeDBInstancesOutput } from "./DescribeDBInstancesOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
