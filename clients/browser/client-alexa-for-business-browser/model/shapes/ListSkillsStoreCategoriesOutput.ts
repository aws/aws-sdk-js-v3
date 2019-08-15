import { _CategoryList } from "./_CategoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSkillsStoreCategoriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CategoryList: {
      shape: _CategoryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
