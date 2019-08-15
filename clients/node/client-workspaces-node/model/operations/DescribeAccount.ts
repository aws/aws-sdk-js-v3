import { DescribeAccountInput } from "../shapes/DescribeAccountInput";
import { DescribeAccountOutput } from "../shapes/DescribeAccountOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAccountInput
  },
  output: {
    shape: DescribeAccountOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    }
  ]
};
