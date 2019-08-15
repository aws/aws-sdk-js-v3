import { DescribeLifecycleHooksInput } from "../shapes/DescribeLifecycleHooksInput";
import { DescribeLifecycleHooksOutput } from "../shapes/DescribeLifecycleHooksOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLifecycleHooks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLifecycleHooks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLifecycleHooksInput
  },
  output: {
    shape: DescribeLifecycleHooksOutput,
    resultWrapper: "DescribeLifecycleHooksResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
