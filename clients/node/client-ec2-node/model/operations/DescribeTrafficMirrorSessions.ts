import { DescribeTrafficMirrorSessionsInput } from "../shapes/DescribeTrafficMirrorSessionsInput";
import { DescribeTrafficMirrorSessionsOutput } from "../shapes/DescribeTrafficMirrorSessionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrafficMirrorSessions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrafficMirrorSessions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrafficMirrorSessionsInput
  },
  output: {
    shape: DescribeTrafficMirrorSessionsOutput
  },
  errors: []
};
