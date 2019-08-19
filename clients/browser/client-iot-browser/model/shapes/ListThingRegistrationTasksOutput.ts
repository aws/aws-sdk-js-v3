import { _TaskIdList } from "./_TaskIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingRegistrationTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskIds: {
      shape: _TaskIdList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
