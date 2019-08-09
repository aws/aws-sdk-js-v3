import { _EntityIdList } from "./_EntityIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EntityNotExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    EntityIds: {
      shape: _EntityIdList
    }
  },
  exceptionType: "EntityNotExistsException"
};
