import { DescribeMyUserProfileInput } from "../shapes/DescribeMyUserProfileInput";
import { DescribeMyUserProfileOutput } from "../shapes/DescribeMyUserProfileOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMyUserProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMyUserProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMyUserProfileInput
  },
  output: {
    shape: DescribeMyUserProfileOutput
  },
  errors: []
};
