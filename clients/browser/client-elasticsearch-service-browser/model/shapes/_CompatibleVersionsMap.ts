import { _ElasticsearchVersionList } from "./_ElasticsearchVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompatibleVersionsMap: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceVersion: {
      shape: {
        type: "string"
      }
    },
    TargetVersions: {
      shape: _ElasticsearchVersionList
    }
  }
};
