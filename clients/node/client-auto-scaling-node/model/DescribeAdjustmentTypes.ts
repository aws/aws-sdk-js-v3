import { DescribeAdjustmentTypesInput } from "./DescribeAdjustmentTypesInput";
import { DescribeAdjustmentTypesOutput } from "./DescribeAdjustmentTypesOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAdjustmentTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAdjustmentTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAdjustmentTypesInput
  },
  output: {
    shape: DescribeAdjustmentTypesOutput,
    resultWrapper: "DescribeAdjustmentTypesResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
