import { _ElasticGpuSet } from "./_ElasticGpuSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticGpusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticGpuSet: {
      shape: _ElasticGpuSet,
      locationName: "elasticGpuSet"
    },
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
