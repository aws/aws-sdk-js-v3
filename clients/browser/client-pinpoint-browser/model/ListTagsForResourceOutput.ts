import { _TagsModel } from "./_TagsModel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceOutput: _Structure_ = {
  type: "structure",
  required: ["TagsModel"],
  members: {
    TagsModel: {
      shape: _TagsModel
    }
  },
  payload: "TagsModel"
};
