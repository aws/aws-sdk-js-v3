import { DescribeLoggingStatusInput } from "../shapes/DescribeLoggingStatusInput";
import { DescribeLoggingStatusOutput } from "../shapes/DescribeLoggingStatusOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLoggingStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoggingStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoggingStatusInput
  },
  output: {
    shape: DescribeLoggingStatusOutput,
    resultWrapper: "DescribeLoggingStatusResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    }
  ]
};
