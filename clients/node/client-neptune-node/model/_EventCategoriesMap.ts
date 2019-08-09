import { _EventCategoriesList } from "./_EventCategoriesList";
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
    EventCategories: {
      shape: _EventCategoriesList
    }
  }
};
