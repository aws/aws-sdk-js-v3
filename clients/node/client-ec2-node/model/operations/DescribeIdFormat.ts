import { DescribeIdFormatInput } from "../shapes/DescribeIdFormatInput";
import { DescribeIdFormatOutput } from "../shapes/DescribeIdFormatOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIdFormat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIdFormat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeIdFormatInput
  },
  output: {
    shape: DescribeIdFormatOutput
  },
  errors: []
};
