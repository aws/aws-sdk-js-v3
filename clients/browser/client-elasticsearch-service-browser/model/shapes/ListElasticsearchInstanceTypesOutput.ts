import { _ElasticsearchInstanceTypeList } from "./_ElasticsearchInstanceTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListElasticsearchInstanceTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticsearchInstanceTypes: {
      shape: _ElasticsearchInstanceTypeList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
