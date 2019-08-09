import { DescribeReservedInstancesModificationsInput } from "./DescribeReservedInstancesModificationsInput";
import { DescribeReservedInstancesModificationsOutput } from "./DescribeReservedInstancesModificationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReservedInstancesModifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedInstancesModifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedInstancesModificationsInput
  },
  output: {
    shape: DescribeReservedInstancesModificationsOutput
  },
  errors: []
};
