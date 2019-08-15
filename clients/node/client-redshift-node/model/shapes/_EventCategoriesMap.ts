import { _EventInfoMapList } from "./_EventInfoMapList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventCategoriesMap: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceType: {
      shape: {
        type: "string"
      }
    },
    Events: {
      shape: _EventInfoMapList
    }
  }
};
