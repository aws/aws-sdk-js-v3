import { DescribeClusterTracksInput } from "../shapes/DescribeClusterTracksInput";
import { DescribeClusterTracksOutput } from "../shapes/DescribeClusterTracksOutput";
import { InvalidClusterTrackFault } from "../shapes/InvalidClusterTrackFault";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterTracks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterTracks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterTracksInput
  },
  output: {
    shape: DescribeClusterTracksOutput,
    resultWrapper: "DescribeClusterTracksResult"
  },
  errors: [
    {
      shape: InvalidClusterTrackFault
    },
    {
      shape: UnauthorizedOperation
    }
  ]
};
