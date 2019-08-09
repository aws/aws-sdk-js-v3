import { DescribeTagsInput } from "./DescribeTagsInput";
import { DescribeTagsOutput } from "./DescribeTagsOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
