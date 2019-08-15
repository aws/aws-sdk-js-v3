import { DescribeByoipCidrsInput } from "../shapes/DescribeByoipCidrsInput";
import { DescribeByoipCidrsOutput } from "../shapes/DescribeByoipCidrsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeByoipCidrs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeByoipCidrs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeByoipCidrsInput
  },
  output: {
    shape: DescribeByoipCidrsOutput
  },
  errors: []
};
