import { DescribeHostsInput } from "./DescribeHostsInput";
import { DescribeHostsOutput } from "./DescribeHostsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeHosts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHosts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHostsInput
  },
  output: {
    shape: DescribeHostsOutput
  },
  errors: []
};
