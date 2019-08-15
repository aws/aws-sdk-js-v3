import { DescribeRecordInput } from "../shapes/DescribeRecordInput";
import { DescribeRecordOutput } from "../shapes/DescribeRecordOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRecord: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRecord",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRecordInput
  },
  output: {
    shape: DescribeRecordOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
