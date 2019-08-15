import { _IdentityPoolTagsType } from "./_IdentityPoolTagsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tags: {
      shape: _IdentityPoolTagsType
    }
  }
};
