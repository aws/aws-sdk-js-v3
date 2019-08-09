import { DescribeImagesInput } from "./DescribeImagesInput";
import { DescribeImagesOutput } from "./DescribeImagesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImagesInput
  },
  output: {
    shape: DescribeImagesOutput
  },
  errors: []
};
