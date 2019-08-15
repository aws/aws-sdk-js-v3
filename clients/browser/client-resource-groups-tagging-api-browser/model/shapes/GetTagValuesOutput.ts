import { _TagValuesOutputList } from "./_TagValuesOutputList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTagValuesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PaginationToken: {
      shape: {
        type: "string"
      }
    },
    TagValues: {
      shape: _TagValuesOutputList
    }
  }
};
