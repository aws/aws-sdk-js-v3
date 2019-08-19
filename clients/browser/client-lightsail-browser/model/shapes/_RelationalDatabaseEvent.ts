import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resource: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    },
    eventCategories: {
      shape: _StringList
    }
  }
};
