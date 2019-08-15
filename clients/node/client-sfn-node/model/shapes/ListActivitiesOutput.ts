import { _ActivityList } from "./_ActivityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActivitiesOutput: _Structure_ = {
  type: "structure",
  required: ["activities"],
  members: {
    activities: {
      shape: _ActivityList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
