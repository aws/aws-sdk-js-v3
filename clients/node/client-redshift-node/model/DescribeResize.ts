import { DescribeResizeInput } from "./DescribeResizeInput";
import { DescribeResizeOutput } from "./DescribeResizeOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ResizeNotFoundFault } from "./ResizeNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeResize: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeResize",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeResizeInput
  },
  output: {
    shape: DescribeResizeOutput,
    resultWrapper: "DescribeResizeResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: ResizeNotFoundFault
    }
  ]
};
