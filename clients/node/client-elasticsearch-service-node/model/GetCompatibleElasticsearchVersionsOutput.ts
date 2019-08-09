import { _CompatibleElasticsearchVersionsList } from "./_CompatibleElasticsearchVersionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCompatibleElasticsearchVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CompatibleElasticsearchVersions: {
      shape: _CompatibleElasticsearchVersionsList
    }
  }
};
