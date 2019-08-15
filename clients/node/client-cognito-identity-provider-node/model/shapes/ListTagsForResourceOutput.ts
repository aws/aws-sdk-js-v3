import { _UserPoolTagsType } from "./_UserPoolTagsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tags: {
      shape: _UserPoolTagsType
    }
  }
};
