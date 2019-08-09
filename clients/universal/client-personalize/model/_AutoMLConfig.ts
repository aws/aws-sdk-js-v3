import { _ArnList } from "./_ArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoMLConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    metricName: {
      shape: {
        type: "string"
      }
    },
    recipeList: {
      shape: _ArnList
    }
  }
};
