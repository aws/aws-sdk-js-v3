import { DescribeActivityTypeInput } from "./DescribeActivityTypeInput";
import { DescribeActivityTypeOutput } from "./DescribeActivityTypeOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
