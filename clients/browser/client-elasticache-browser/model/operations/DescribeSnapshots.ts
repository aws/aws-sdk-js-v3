import { DescribeSnapshotsInput } from "../shapes/DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "../shapes/DescribeSnapshotsOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "../shapes/SnapshotNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSnapshotsInput
  },
  output: {
    shape: DescribeSnapshotsOutput,
    resultWrapper: "DescribeSnapshotsResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: SnapshotNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
