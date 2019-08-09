import { _EventCategoriesList } from "./_EventCategoriesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceIdentifier: {
      shape: {
        type: "string"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    EventCategories: {
      shape: _EventCategoriesList
    },
    Severity: {
      shape: {
        type: "string"
      }
    },
    Date: {
      shape: {
        type: "timestamp"
      }
    },
    EventId: {
      shape: {
        type: "string"
      }
    }
  }
};
