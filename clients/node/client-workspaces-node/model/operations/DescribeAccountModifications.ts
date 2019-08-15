import { DescribeAccountModificationsInput } from "../shapes/DescribeAccountModificationsInput";
import { DescribeAccountModificationsOutput } from "../shapes/DescribeAccountModificationsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAccountModifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAccountModifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAccountModificationsInput
  },
  output: {
    shape: DescribeAccountModificationsOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    }
  ]
};
