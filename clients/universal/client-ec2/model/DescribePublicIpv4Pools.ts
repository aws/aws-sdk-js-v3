import { DescribePublicIpv4PoolsInput } from "./DescribePublicIpv4PoolsInput";
import { DescribePublicIpv4PoolsOutput } from "./DescribePublicIpv4PoolsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePublicIpv4Pools: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePublicIpv4Pools",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePublicIpv4PoolsInput
  },
  output: {
    shape: DescribePublicIpv4PoolsOutput
  },
  errors: []
};
