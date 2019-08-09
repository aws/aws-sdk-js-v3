import { DescribeOptionGroupOptionsInput } from "./DescribeOptionGroupOptionsInput";
import { DescribeOptionGroupOptionsOutput } from "./DescribeOptionGroupOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeOptionGroupOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOptionGroupOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOptionGroupOptionsInput
  },
  output: {
    shape: DescribeOptionGroupOptionsOutput,
    resultWrapper: "DescribeOptionGroupOptionsResult"
  },
  errors: []
};
