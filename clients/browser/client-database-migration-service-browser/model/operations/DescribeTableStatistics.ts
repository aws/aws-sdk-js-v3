import { DescribeTableStatisticsInput } from "../shapes/DescribeTableStatisticsInput";
import { DescribeTableStatisticsOutput } from "../shapes/DescribeTableStatisticsOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTableStatistics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTableStatistics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTableStatisticsInput
  },
  output: {
    shape: DescribeTableStatisticsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};
