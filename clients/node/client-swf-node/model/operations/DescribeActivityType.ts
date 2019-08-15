import { DescribeActivityTypeInput } from "../shapes/DescribeActivityTypeInput";
import { DescribeActivityTypeOutput } from "../shapes/DescribeActivityTypeOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeActivityType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeActivityType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeActivityTypeInput
  },
  output: {
    shape: DescribeActivityTypeOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
