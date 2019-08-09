import { DescribeAccountModificationsInput } from "./DescribeAccountModificationsInput";
import { DescribeAccountModificationsOutput } from "./DescribeAccountModificationsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
