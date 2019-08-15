import { _ElasticsearchVersionList } from "./_ElasticsearchVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListElasticsearchVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticsearchVersions: {
      shape: _ElasticsearchVersionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
