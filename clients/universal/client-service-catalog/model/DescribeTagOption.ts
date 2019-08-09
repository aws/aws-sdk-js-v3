import { DescribeTagOptionInput } from "./DescribeTagOptionInput";
import { DescribeTagOptionOutput } from "./DescribeTagOptionOutput";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTagOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTagOption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTagOptionInput
  },
  output: {
    shape: DescribeTagOptionOutput
  },
  errors: [
    {
      shape: TagOptionNotMigratedException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
