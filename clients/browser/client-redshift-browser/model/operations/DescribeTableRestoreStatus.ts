import { DescribeTableRestoreStatusInput } from "../shapes/DescribeTableRestoreStatusInput";
import { DescribeTableRestoreStatusOutput } from "../shapes/DescribeTableRestoreStatusOutput";
import { TableRestoreNotFoundFault } from "../shapes/TableRestoreNotFoundFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
