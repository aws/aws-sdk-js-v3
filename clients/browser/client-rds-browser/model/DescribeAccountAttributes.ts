import { DescribeAccountAttributesInput } from "./DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "./DescribeAccountAttributesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAccountAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAccountAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAccountAttributesInput
  },
  output: {
    shape: DescribeAccountAttributesOutput,
    resultWrapper: "DescribeAccountAttributesResult"
  },
  errors: []
};
