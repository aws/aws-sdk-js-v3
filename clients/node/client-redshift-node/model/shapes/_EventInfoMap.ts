import { _EventCategoriesList } from "./_EventCategoriesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventInfoMap: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventId: {
      shape: {
        type: "string"
      }
    },
    EventCategories: {
      shape: _EventCategoriesList
    },
    EventDescription: {
      shape: {
        type: "string"
      }
    },
    Severity: {
      shape: {
        type: "string"
      }
    }
  }
};
