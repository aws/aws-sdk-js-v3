import { DescribeTrafficMirrorTargetsInput } from "./DescribeTrafficMirrorTargetsInput";
import { DescribeTrafficMirrorTargetsOutput } from "./DescribeTrafficMirrorTargetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTrafficMirrorTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrafficMirrorTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrafficMirrorTargetsInput
  },
  output: {
    shape: DescribeTrafficMirrorTargetsOutput
  },
  errors: []
};
