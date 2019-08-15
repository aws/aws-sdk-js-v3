import { DescribeTransformJobInput } from "../shapes/DescribeTransformJobInput";
import { DescribeTransformJobOutput } from "../shapes/DescribeTransformJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTransformJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTransformJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTransformJobInput
  },
  output: {
    shape: DescribeTransformJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
