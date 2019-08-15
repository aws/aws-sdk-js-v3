import { DescribeTagsInput } from "../shapes/DescribeTagsInput";
import { DescribeTagsOutput } from "../shapes/DescribeTagsOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTagsInput
  },
  output: {
    shape: DescribeTagsOutput,
    resultWrapper: "DescribeTagsResult"
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
