import { DescribeScalingProcessTypesInput } from "./DescribeScalingProcessTypesInput";
import { DescribeScalingProcessTypesOutput } from "./DescribeScalingProcessTypesOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeScalingProcessTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScalingProcessTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScalingProcessTypesInput
  },
  output: {
    shape: DescribeScalingProcessTypesOutput,
    resultWrapper: "DescribeScalingProcessTypesResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
