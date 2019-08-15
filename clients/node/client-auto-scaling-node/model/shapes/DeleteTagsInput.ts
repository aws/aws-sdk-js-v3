import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTagsInput: _Structure_ = {
  type: "structure",
  required: ["Tags"],
  members: {
    Tags: {
      shape: _Tags
    }
  }
};
