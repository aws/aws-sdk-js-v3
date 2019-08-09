import { _ElasticGpuIdSet } from "./_ElasticGpuIdSet";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticGpusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticGpuIds: {
      shape: _ElasticGpuIdSet,
      locationName: "ElasticGpuId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 10
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
