import { DescribeReservedDBInstancesInput } from "../shapes/DescribeReservedDBInstancesInput";
import { DescribeReservedDBInstancesOutput } from "../shapes/DescribeReservedDBInstancesOutput";
import { ReservedDBInstanceNotFoundFault } from "../shapes/ReservedDBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedDBInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedDBInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedDBInstancesInput
  },
  output: {
    shape: DescribeReservedDBInstancesOutput,
    resultWrapper: "DescribeReservedDBInstancesResult"
  },
  errors: [
    {
      shape: ReservedDBInstanceNotFoundFault
    }
  ]
};
