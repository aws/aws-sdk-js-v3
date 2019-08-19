import { _BlueprintList } from "./_BlueprintList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBlueprintsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    blueprints: {
      shape: _BlueprintList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
