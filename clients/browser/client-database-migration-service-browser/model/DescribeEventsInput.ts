import { _EventCategoriesList } from "./_EventCategoriesList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventsInput: _Structure_ = {
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
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Duration: {
      shape: {
        type: "integer"
      }
    },
    EventCategories: {
      shape: _EventCategoriesList
    },
    Filters: {
      shape: _FilterList
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
