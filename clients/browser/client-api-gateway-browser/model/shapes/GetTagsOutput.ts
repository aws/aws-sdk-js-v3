import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tags: {
      shape: _MapOfStringToString
    }
  }
};
