import { DescribeTagOptionInput } from "../shapes/DescribeTagOptionInput";
import { DescribeTagOptionOutput } from "../shapes/DescribeTagOptionOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
