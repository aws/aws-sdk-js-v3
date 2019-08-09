import { _MapOf__string } from "./_MapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagsModel: _Structure_ = {
  type: "structure",
  required: ["tags"],
  members: {
    tags: {
      shape: _MapOf__string,
      locationName: "tags"
    }
  }
};
