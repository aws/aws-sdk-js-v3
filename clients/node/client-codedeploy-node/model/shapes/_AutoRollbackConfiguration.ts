import { _AutoRollbackEventsList } from "./_AutoRollbackEventsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoRollbackConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    enabled: {
      shape: {
        type: "boolean"
      }
    },
    events: {
      shape: _AutoRollbackEventsList
    }
  }
};
