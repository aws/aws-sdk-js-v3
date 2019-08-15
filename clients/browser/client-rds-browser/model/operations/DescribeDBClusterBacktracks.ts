import { DescribeDBClusterBacktracksInput } from "../shapes/DescribeDBClusterBacktracksInput";
import { DescribeDBClusterBacktracksOutput } from "../shapes/DescribeDBClusterBacktracksOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { DBClusterBacktrackNotFoundFault } from "../shapes/DBClusterBacktrackNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBClusterBacktracks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBClusterBacktracks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBClusterBacktracksInput
  },
  output: {
    shape: DescribeDBClusterBacktracksOutput,
    resultWrapper: "DescribeDBClusterBacktracksResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: DBClusterBacktrackNotFoundFault
    }
  ]
};
