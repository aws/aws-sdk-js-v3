import { DescribeMetricCollectionTypesInput } from "../shapes/DescribeMetricCollectionTypesInput";
import { DescribeMetricCollectionTypesOutput } from "../shapes/DescribeMetricCollectionTypesOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMetricCollectionTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMetricCollectionTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMetricCollectionTypesInput
  },
  output: {
    shape: DescribeMetricCollectionTypesOutput,
    resultWrapper: "DescribeMetricCollectionTypesResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
