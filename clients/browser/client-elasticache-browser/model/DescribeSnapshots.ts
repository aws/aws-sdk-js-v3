import { DescribeSnapshotsInput } from "./DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "./DescribeSnapshotsOutput";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
