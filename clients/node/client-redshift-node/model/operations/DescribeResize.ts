import { DescribeResizeInput } from "../shapes/DescribeResizeInput";
import { DescribeResizeOutput } from "../shapes/DescribeResizeOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { ResizeNotFoundFault } from "../shapes/ResizeNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
