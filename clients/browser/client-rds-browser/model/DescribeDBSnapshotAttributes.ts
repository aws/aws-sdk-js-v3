import { DescribeDBSnapshotAttributesInput } from "./DescribeDBSnapshotAttributesInput";
import { DescribeDBSnapshotAttributesOutput } from "./DescribeDBSnapshotAttributesOutput";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBSnapshotAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBSnapshotAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBSnapshotAttributesInput
  },
  output: {
    shape: DescribeDBSnapshotAttributesOutput,
    resultWrapper: "DescribeDBSnapshotAttributesResult"
  },
  errors: [
    {
      shape: DBSnapshotNotFoundFault
    }
  ]
};
