import { DescribeTableRestoreStatusInput } from "./DescribeTableRestoreStatusInput";
import { DescribeTableRestoreStatusOutput } from "./DescribeTableRestoreStatusOutput";
import { TableRestoreNotFoundFault } from "./TableRestoreNotFoundFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTableRestoreStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTableRestoreStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTableRestoreStatusInput
  },
  output: {
    shape: DescribeTableRestoreStatusOutput,
    resultWrapper: "DescribeTableRestoreStatusResult"
  },
  errors: [
    {
      shape: TableRestoreNotFoundFault
    },
    {
      shape: ClusterNotFoundFault
    }
  ]
};
