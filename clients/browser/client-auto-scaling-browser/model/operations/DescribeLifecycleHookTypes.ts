import { DescribeLifecycleHookTypesInput } from "../shapes/DescribeLifecycleHookTypesInput";
import { DescribeLifecycleHookTypesOutput } from "../shapes/DescribeLifecycleHookTypesOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLifecycleHookTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLifecycleHookTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLifecycleHookTypesInput
  },
  output: {
    shape: DescribeLifecycleHookTypesOutput,
    resultWrapper: "DescribeLifecycleHookTypesResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
