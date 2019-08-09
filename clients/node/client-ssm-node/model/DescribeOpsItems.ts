import { DescribeOpsItemsInput } from "./DescribeOpsItemsInput";
import { DescribeOpsItemsOutput } from "./DescribeOpsItemsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeOpsItems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOpsItems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOpsItemsInput
  },
  output: {
    shape: DescribeOpsItemsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
